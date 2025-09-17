import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import {
  Github,
  Heart,
  Linkedin,
  PlusCircle,
  Twitter,
  Edit3,
  Trophy,
  Target,
  Zap,
  Crown,
  Star,
  Users,
  Eye,
  Play,
  Award,
  Gamepad2,
} from "lucide-react"
import { Link } from "react-router-dom"


function DeveloperProfile() {
  const [activeTab, setActiveTab] = useState("games")
  const [hoveredGame, setHoveredGame] = useState(null)

  const playerStats = [
    { label: "CLIP VIEWS", value: "930k", icon: Eye, color: "from-blue-400 to-cyan-400" },
    { label: "CLIPS", value: "82", icon: Play, color: "from-purple-400 to-pink-400" },
    { label: "FOLLOWERS", value: "5.7K", icon: Users, color: "from-green-400 to-teal-400" },
    { label: "FOLLOWING", value: "24", icon: Heart, color: "from-red-400 to-orange-400" },
  ]

  const games = [
    {
      id: 1,
      name: "Reversi",
      description: "The classic strategy game of flipping discs and conquering the board!",
      image: "/images/reversi.png",
      stats: { wins: 127, losses: 43, winRate: "74%" },
      rank: "Master",
      hours: "89h",
    },
    {
      id: 2,
      name: "Minesweeper",
      description: "Uncover tiles, avoid mines, and put your logic to the test in the classic game!",
      image: "/images/mines.png",
      stats: { wins: 234, losses: 67, winRate: "78%" },
      rank: "Expert",
      hours: "156h",
    },
    {
      id: 3,
      name: "Checkers",
      description: "Jump, capture, and strategize your way to victory in the timeless game!",
      image: "/images/chess.png",
      stats: { wins: 89, losses: 21, winRate: "81%" },
      rank: "Grandmaster",
      hours: "203h",
    },
  ]

  const skills = [
    { name: "Strategy", level: 95, icon: Target },
    { name: "Reflexes", level: 87, icon: Zap },
    { name: "Leadership", level: 92, icon: Crown },
    { name: "Teamwork", level: 89, icon: Users },
  ]

  const achievements = [
    { name: "First Victory", description: "Won your first game", rarity: "Common", unlocked: true },
    { name: "Streak Master", description: "Won 10 games in a row", rarity: "Rare", unlocked: true },
    { name: "Perfectionist", description: "Achieved 100% win rate in a session", rarity: "Epic", unlocked: false },
    { name: "Legend", description: "Reached Grandmaster rank", rarity: "Legendary", unlocked: true },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
        />
      </div>

      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        {/* Header Profile Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-slate-600/50 shadow-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="relative group">
                <motion.div
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-400 to-blue-500 p-1"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src="/images/profile1.jpg" alt="Profile" className="w-full h-full rounded-full object-cover" />
                </motion.div>
                <motion.button
                  className="absolute bottom-2 right-2 bg-slate-700/90 backdrop-blur-sm p-2 rounded-full border border-slate-500/50 hover:bg-slate-600/90 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link  to="/edit-profile"><Edit3 size={16} className="text-white" /></Link>
                </motion.button>
                <div className="absolute -top-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-slate-800 animate-pulse" />
              </div>

              <div>
                <motion.h1
                  className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  Dipika Mandal
                </motion.h1>
                <motion.p
                  className="text-slate-400 text-lg font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  Deepi
                </motion.p>
                <motion.div
                  className="flex items-center gap-2 mt-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Grandmaster</span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse ml-2" />
                  <span className="text-green-400 text-sm">Online</span>
                </motion.div>
              </div>
            </div>

            <div className="flex gap-4">
              {[
                { icon: Github, href: "#", color: "hover:text-purple-400" },
                { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`text-slate-400 ${social.color} transition-all text-2xl`}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-2xl p-6 mb-6 border border-slate-600/50 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
              {playerStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${stat.color} mr-2`}>
                      <stat.icon className="w-4 h-4 text-white" />
                    </div>
                    <motion.p
                      className="text-2xl font-bold text-white"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                    >
                      {stat.value}
                    </motion.p>
                  </div>
                  <p className="text-slate-400 text-sm font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-slate-300 max-w-md">
              <motion.p className="mb-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                Grandmaster Zoe main and always looking for friends to play with.
              </motion.p>
              <motion.p
                className="flex items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Valorant noobie and I like getting carried.
                <Heart className="text-red-500 w-4 h-4" fill="currentColor" />
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Games Section */}
          <motion.div
            className="xl:col-span-2 bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-600/50 shadow-2xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Gamepad2 className="w-6 h-6 text-blue-400" />
              <h2 className="text-2xl font-bold text-white">Deepi's Games</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {games.map((game, index) => (
                <motion.div
                  key={game.id}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30 hover:border-blue-500/50 transition-all cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  onHoverStart={() => setHoveredGame(game.id)}
                  onHoverEnd={() => setHoveredGame(null)}
                >
                  <div className="flex gap-4">
                    <motion.div
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={game.image || "/placeholder.svg"}
                        alt={game.name}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
                    </motion.div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-blue-400 font-semibold text-lg">{game.name}</h3>
                        <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
                          {game.rank}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-3 line-clamp-2">{game.description}</p>

                      <AnimatePresence>
                        {hoveredGame === game.id && (
                          <motion.div
                            className="grid grid-cols-2 gap-2 text-xs"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="text-green-400">
                              <span className="font-semibold">{game.stats.wins}</span> Wins
                            </div>
                            <div className="text-red-400">
                              <span className="font-semibold">{game.stats.losses}</span> Losses
                            </div>
                            <div className="text-blue-400">
                              <span className="font-semibold">{game.stats.winRate}</span> Win Rate
                            </div>
                            <div className="text-purple-400">
                              <span className="font-semibold">{game.hours}</span> Played
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div
                className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-4 border-2 border-dashed border-slate-600/50 hover:border-purple-500/50 transition-all cursor-pointer group flex items-center justify-center min-h-[120px]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-center">
                  <PlusCircle className="w-12 h-12 text-slate-500 group-hover:text-purple-400 transition-colors mx-auto mb-2" />
                  <p className="text-slate-500 group-hover:text-purple-400 transition-colors font-medium">
                    Add New Game
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills & Achievements Section */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Skills */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-600/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-6 h-6 text-purple-400" />
                <h2 className="text-xl font-bold text-white">Skills</h2>
              </div>

              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-4 h-4 text-blue-400" />
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-600/50 shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-yellow-400" />
                <h2 className="text-xl font-bold text-white">Achievements</h2>
              </div>

              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.name}
                    className={`p-3 rounded-lg border transition-all ${
                      achievement.unlocked
                        ? "bg-slate-700/50 border-slate-600/50"
                        : "bg-slate-800/30 border-slate-700/30 opacity-60"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    whileHover={achievement.unlocked ? { scale: 1.02 } : {}}
                  >
                    <div className="flex items-center gap-3">
                      <Award className={`w-5 h-5 ${achievement.unlocked ? "text-yellow-400" : "text-slate-500"}`} />
                      <div className="flex-1">
                        <h4 className="text-white font-medium text-sm">{achievement.name}</h4>
                        <p className="text-slate-400 text-xs">{achievement.description}</p>
                      </div>
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          achievement.rarity === "Legendary"
                            ? "bg-orange-500/20 text-orange-400"
                            : achievement.rarity === "Epic"
                              ? "bg-purple-500/20 text-purple-400"
                              : achievement.rarity === "Rare"
                                ? "bg-blue-500/20 text-blue-400"
                                : "bg-gray-500/20 text-gray-400"
                        }`}
                      >
                        {achievement.rarity}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default DeveloperProfile
