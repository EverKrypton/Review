import React, { useState } from 'react';

const tokenData = {
  name: "TON Token",
  handle: "@TONToken",
  description: "Revolutionary cartoon token on the TON network",
  profilePicture: "/api/placeholder/200/200",
  coverPicture: "/api/placeholder/1500/500",
};

const roadmapData = [
  { phase: "Q3 2024", title: "Launch", description: "Initial token launch on TON" },
  { phase: "Q4 2024", title: "Expansion", description: "Partnerships and exchange listings" },
  { phase: "Q1 2025", title: "Ecosystem", description: "Build DApps on TON" },
  { phase: "Q2 2025", title: "Global Adoption", description: "Worldwide marketing campaigns" },
];

const tokenomics = [
  { category: "Public Sale", percentage: 40 },
  { category: "Team", percentage: 20 },
  { category: "Ecosystem", percentage: 25 },
  { category: "Reserve", percentage: 15 },
];

const TonTokenLandingPage: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-comic-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap');

        body {
          font-family: 'Comic Neue', cursive;
        }

        .cartoon-border {
          border: 3px solid white;
          border-radius: 15px;
          box-shadow: 5px 5px 0px white;
        }

        .cartoon-button {
          background-color: white;
          color: black;
          border: 3px solid white;
          border-radius: 25px;
          padding: 10px 20px;
          font-weight: bold;
          transition: all 0.3s;
          box-shadow: 3px 3px 0px white;
        }

        .cartoon-button:hover {
          transform: translate(-3px, -3px);
          box-shadow: 6px 6px 0px white;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        .float-animation {
          animation: float 3s ease-in-out infinite;
        }

        .menu-icon {
          width: 30px;
          height: 20px;
          position: relative;
          cursor: pointer;
        }

        .menu-icon::before,
        .menu-icon::after,
        .menu-icon div {
          background-color: white;
          content: "";
          display: block;
          height: 3px;
          border-radius: 3px;
          margin: 5px 0;
          transition: 0.5s;
        }

        .menu-open::before {
          transform: translateY(8px) rotate(135deg);
        }

        .menu-open::after {
          transform: translateY(-8px) rotate(-135deg);
        }

        .menu-open div {
          transform: scale(0);
        }

        .timeline-dot::before {
          content: "";
          position: absolute;
          width: 20px;
          height: 20px;
          background-color: white;
          border-radius: 50%;
          left: -10px;
          top: 0;
        }

        .timeline-line::before {
          content: "";
          position: absolute;
          width: 3px;
          height: 100%;
          background-color: white;
          left: 0;
          top: 20px;
        }
      `}</style>

      {/* Navigation */}
      <nav className="p-4 sticky top-0 z-50 bg-black">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-2xl">{tokenData.name}</div>
          <div className="hidden md:flex space-x-4">
            <a href="#about" className="cartoon-button">About</a>
            <a href="#tokenomics" className="cartoon-button">Tokenomics</a>
            <a href="#roadmap" className="cartoon-button">Roadmap</a>
            <a href="#whitepaper" className="cartoon-button">Whitepaper</a>
          </div>
          <div className={`menu-icon ${menuOpen ? 'menu-open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
            <div></div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center">
          <a href="#about" className="cartoon-button my-4" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#tokenomics" className="cartoon-button my-4" onClick={() => setMenuOpen(false)}>Tokenomics</a>
          <a href="#roadmap" className="cartoon-button my-4" onClick={() => setMenuOpen(false)}>Roadmap</a>
          <a href="#whitepaper" className="cartoon-button my-4" onClick={() => setMenuOpen(false)}>Whitepaper</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-64 mb-32">
        <img src={tokenData.coverPicture} alt="Cover" className="w-full h-full object-cover" />
        <div className="absolute -bottom-16 left-8">
          <img src={tokenData.profilePicture} alt="Profile" className="w-32 h-32 rounded-full border-4 border-black" />
        </div>
        <div className="absolute bottom-4 left-44">
          <h1 className="text-4xl font-bold">{tokenData.name}</h1>
          <p className="text-xl">{tokenData.handle}</p>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">About {tokenData.name}</h2>
          <p className="text-xl text-center max-w-3xl mx-auto cartoon-border p-6 float-animation">{tokenData.description}</p>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Tokenomics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tokenomics.map((item, index) => (
              <div key={index} className="cartoon-border p-4 text-center float-animation" style={{animationDelay: `${index * 0.2}s`}}>
                <h3 className="text-2xl font-bold mb-2">{item.percentage}%</h3>
                <p>{item.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Roadmap</h2>
          <div className="space-y-8 relative">
            {roadmapData.map((item, index) => (
              <div key={index} className="ml-8 relative timeline-dot timeline-line">
                <div className="cartoon-border p-4 float-animation" style={{animationDelay: `${index * 0.3}s`}}>
                  <h3 className="text-xl font-bold mb-2">{item.phase}: {item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepaper Section */}
      <section id="whitepaper" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Whitepaper</h2>
          <p className="text-xl mb-8">Learn more about our technology and vision in our comprehensive whitepaper.</p>
          <a href="#download-whitepaper" className="cartoon-button text-2xl">
            Download Whitepaper
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-4 border-white">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 {tokenData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default TonTokenLandingPage;
