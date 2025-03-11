"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/app/components/ui/card"
import { MessageSquare, ThumbsUp, Flame } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/app/components/ui/avatar"

interface Post {
  id: number
  author: {
    name: string
    avatar: string
  }
  content: string
  likes: number
  comments: number
  timeAgo: string
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      name: "Olivia Bennett",
      avatar: "/avatars/olivia.jpg",
    },
    content: "How do you keep your users engaged during product launches?",
    likes: 12,
    comments: 6,
    timeAgo: "4d",
  },
  {
    id: 2,
    author: {
      name: "Ethan Rodriguez",
      avatar: "/avatars/ethan.jpg",
    },
    content: "What's your favorite tool for tracking user analytics?",
    likes: 8,
    comments: 4,
    timeAgo: "2d",
  },
]

export function CommunityDashboard() {
  return (
    <Card className="overflow-hidden backdrop-blur-lg bg-white/10 border-0 h-full">
      <CardContent className="p-6 flex flex-col h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 flex-1"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold tracking-tighter text-white">Community Discussions</h3>
            <button className="text-sm text-primary hover:underline">View all</button>
          </div>

          <div className="space-y-4 overflow-y-auto flex-1">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg bg-white/5 space-y-4"
              >
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={post.author.avatar} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-white">{post.author.name}</p>
                    <p className="text-xs text-zinc-400">{post.timeAgo}</p>
                  </div>
                </div>

                <p className="text-sm text-white">{post.content}</p>

                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageSquare className="w-4 h-4" />
                    {post.comments}
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Flame className="w-4 h-4" />
                    Hot
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  )
}

