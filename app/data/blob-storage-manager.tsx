"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Copy, Trash2, Folder, File, ChevronRight, ChevronDown, ImageIcon } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/app/lib/utils"

interface BlobFile {
  url: string
  pathname: string
  size: number
  uploadedAt: string
}

interface FolderStructure {
  [key: string]: {
    files: BlobFile[]
    subfolders: { [key: string]: FolderStructure }
  }
}

const createFolderStructure = (files: BlobFile[]): FolderStructure => {
  const structure: FolderStructure = { "": { files: [], subfolders: {} } }

  files.forEach((file) => {
    const parts = file.pathname.split("/").filter(Boolean)
    let currentLevel = structure[""]

    parts.forEach((part, index) => {
      if (index === parts.length - 1) {
        currentLevel.files.push(file)
      } else {
        if (!currentLevel.subfolders[part]) {
          currentLevel.subfolders[part] = { files: [], subfolders: {} }
        }
        currentLevel = currentLevel.subfolders[part]
      }
    })
  })

  return structure
}

const FolderComponent: React.FC<{
  name: string
  structure: FolderStructure
  level: number
  onCopy: (url: string) => void
  onDelete: (url: string) => void
}> = ({ name, structure, level, onCopy, onDelete }) => {
  const [isOpen, setIsOpen] = useState(level === 0)

  return (
    <div className="ml-4">
      <div className="flex items-center cursor-pointer p-1" onClick={() => setIsOpen(!isOpen)}>
        {level > 0 && (
          <>
            {isOpen ? (
              <ChevronDown className="h-4 w-4 mr-2 text-emerald-400" />
            ) : (
              <ChevronRight className="h-4 w-4 mr-2 text-emerald-400" />
            )}
            <Folder className="h-4 w-4 mr-2 text-emerald-300" />
          </>
        )}
        <span className="text-sm text-emerald-200 font-medium">{name}</span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="space-y-2 mt-2">
              {Object.entries(structure.subfolders).map(([subName, subStructure]) => (
                <FolderComponent
                  key={subName}
                  name={subName}
                  structure={subStructure}
                  level={level + 1}
                  onCopy={onCopy}
                  onDelete={onDelete}
                />
              ))}
              {structure.files.map((file) => (
                <FileComponent key={file.url} file={file} onCopy={onCopy} onDelete={onDelete} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FileComponent: React.FC<{
  file: BlobFile
  onCopy: (url: string) => void
  onDelete: (url: string) => void
}> = ({ file, onCopy, onDelete }) => {
  const isImage = file.url.match(/\.(jpg|jpeg|png|gif|webp)$/i)

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex items-center justify-between bg-emerald-950/10 rounded-lg p-2 hover:bg-emerald-900/20 transition-colors"
    >
      <div className="flex items-center gap-2">
        {isImage ? (
          <div className="w-6 h-6 relative">
            <Image
              src={file.url || "/placeholder.svg"}
              alt={file.pathname}
              width={24}
              height={24}
              className="rounded-sm"
            />
          </div>
        ) : (
          <ImageIcon className="h-4 w-4 mr-2 text-emerald-400" />
        )}

        <span className="text-sm text-emerald-100 truncate max-w-[200px]">{file.pathname.split("/").pop()}</span>
      </div>
      <div className="flex space-x-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onCopy(file.url)}
          className="text-emerald-300 hover:text-emerald-400"
        >
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy link</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onDelete(file.url)}
          className="text-red-400 hover:text-red-500"
        >
          <Trash2 className="h-4 w-4" />
          <span className="sr-only">Delete file</span>
        </Button>
      </div>
    </motion.div>
  )
}

export function BlobStorageManager() {
  const [files, setFiles] = useState<BlobFile[]>([])
  const [loading, setLoading] = useState(true)
  const [folderStructure, setFolderStructure] = useState<FolderStructure>({ "": { files: [], subfolders: {} } })

  useEffect(() => {
    fetchFiles()
  }, [])

  const fetchFiles = async () => {
    try {
      const response = await fetch("/api/blob-list")
      if (!response.ok) throw new Error("Failed to fetch files")
      const data = await response.json()
      setFiles(data.blobs)
      setFolderStructure(createFolderStructure(data.blobs))
    } catch (error) {
      console.error("Error fetching files:", error)
      toast.error("Failed to load files")
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url)
    toast.success("Link copied to clipboard")
  }

  const deleteFile = async (url: string) => {
    try {
      const response = await fetch("/api/blob-delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })
      if (!response.ok) throw new Error("Failed to delete file")
      toast.success("File deleted successfully")
      fetchFiles()
    } catch (error) {
      console.error("Error deleting file:", error)
      toast.error("Failed to delete file")
    }
  }

  if (loading) {
    return <div className="text-center text-emerald-200">Loading...</div>
  }

  return (
    <div className="space-y-4">
      <div className="bg-gray-900/50 backdrop-blur-md rounded-lg p-4 border border-emerald-900/20">
        <FolderComponent
          name="Root"
          structure={folderStructure[""]}
          level={0}
          onCopy={copyToClipboard}
          onDelete={deleteFile}
        />
      </div>
    </div>
  )
}

