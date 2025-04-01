import { motion } from "framer-motion";

function Feature() {
  const features = [
    {
      id: 1,
      title: "Global Reach",
      description: "Reach millions of players worldwide.",
      icon: "🌍",
      color: "bg-purple-600",
    },
    {
      id: 2,
      title: "Easy to Use",
      description: "Simple tools to publish and manage your games.",
      icon: "🛠️",
      color: "bg-blue-600",
    },
    {
      id: 3,
      title: "Monetization",
      description: "Earn revenue through ads and in-game purchases.",
      icon: "💰",
      color: "bg-green-600",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature) => (
          <motion.div
            className={`${feature.color} p-6 rounded-xl text-center shadow-lg`}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={feature.id}
          >
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-200">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Feature;
