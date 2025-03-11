import { cn } from "@/app/lib/utils"
import { Check, X } from "lucide-react"
import Image from "next/image"

export function TeamInvitation({ avatar, name, role, team, inviter, time }) {
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="relative bg-white dark:bg-zinc-800 border border-emerald-200 dark:border-emerald-800 shadow-[0_1px_6px_0_rgba(16,185,129,0.1)] rounded-xl p-4">
        <div className="flex items-center gap-4">
          <div className="relative h-10 w-10 flex-shrink-0">
            <Image
              src={avatar || "/placeholder.svg"}
              alt={name}
              sizes="40px"
              fill
              className="rounded-full object-cover"
            />
            <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-white dark:ring-zinc-800" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  {name} - {role}
                </p>
                <p className="text-[13px] text-emerald-600 dark:text-emerald-400 mt-0.5">
                  {inviter} invited you to join{" "}
                  <span className="font-medium text-emerald-800 dark:text-emerald-200">{team}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg flex items-center justify-center h-8 w-8 p-0 hover:bg-red-50 dark:hover:bg-red-950/50 text-emerald-400 hover:text-red-600 dark:text-emerald-500 dark:hover:text-red-400 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
            <button
              type="button"
              className={cn(
                "rounded-lg flex items-center justify-center h-8 w-8 p-0",
                "hover:bg-emerald-50 dark:hover:bg-emerald-950/50",
                "text-emerald-400 hover:text-emerald-600",
                "dark:text-emerald-500 dark:hover:text-emerald-400",
                "transition-colors",
              )}
            >
              <Check className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-2 ml-14">
          <p className="text-[12px] text-emerald-400 dark:text-emerald-500">Invited {time}</p>
        </div>
      </div>
    </div>
  )
}

