import { motion } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "Indie Developer",
      comment:
        "WishAlpha helped me reach millions of players. Highly recommended!",
      image: "/images/profile1.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Game Designer",
      comment: "The platform is easy to use, and the support team is amazing.",
      image: "/images/profile2.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <motion.div
            className="bg-gray-700 p-6 rounded-xl"
            whileHover={{ scale: 1.02 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            key={testimonial.id}
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-16 rounded-full mr-4"
              />
              <div>
                <h3 className="text-xl font-bold">{testimonial.name}</h3>
                <p className="text-gray-300">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300">"{testimonial.comment}"</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Testimonials;
