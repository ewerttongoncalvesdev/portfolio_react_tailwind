import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [showMatrix, setShowMatrix] = useState(false);
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("");
  const fullText = "Ewertton Gonçalves";

  useEffect(() => {
    let index = 0;

    // Efeito de digitação
    const typing = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(typing);
        setTimeout(() => setShowMatrix(true), 700);
      }
    }, 120);

    // Após o efeito completo, encerrar loader
    const totalDuration = fullText.length * 120 + 3000;
    const endTimeout = setTimeout(() => setLoading(false), totalDuration);

    return () => {
      clearInterval(typing);
      clearTimeout(endTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.5 } }}
          className="fixed inset-0 flex items-center justify-center bg-black z-50 overflow-hidden"
        >
          {/* Nome digitando */}
          {!showMatrix && (
            <motion.h1
              className="text-green-400 text-4xl md:text-6xl font-mono tracking-wider text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {text}
              <span className="border-r-4 border-green-400 animate-pulse ml-1" />
            </motion.h1>
          )}

          {/* Efeito Matrix */}
          {showMatrix && (
            <motion.div
              className="absolute inset-0 bg-black text-green-500 font-mono text-[12px] leading-tight opacity-80 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <MatrixRain />
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function MatrixRain() {
  const [matrix, setMatrix] = useState<string[]>([]);
  const chars = "01<>{}[]*&^%$#@!";

  useEffect(() => {
    const interval = setInterval(() => {
      const line = Array.from({ length: 80 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
      setMatrix((prev) => [...prev.slice(-25), line]); // Limita o número de linhas visíveis
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 p-4 flex flex-col-reverse">
      {matrix.map((line, i) => (
        <div key={i} className="text-green-400 opacity-70">
          {line}
        </div>
      ))}
    </div>
  );
}
