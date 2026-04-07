
import './index.css'; // Keep this for your Tailwind directives
import { 
  Search, ShoppingCart, User, RefreshCw, Gift, 
  Truck, CreditCard, Headphones, Smartphone, 
  Monitor, Watch, Speaker, Zap, ChevronLeft, ChevronRight,
  Tablet, Laptop, Headphones as HeadphoneIcon, Cable, MousePointer2
} from 'lucide-react';

// --- Sub-Components ---

const Navbar = () => (
  <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
    {/* Top Utility Bar */}
    <div className="container mx-auto px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
             <span className="text-white font-bold text-xl">g</span>
          </div>
          <h1 className="text-2xl font-extrabold tracking-tight">
            <span className="text-orange-500">gadgets</span>
          </h1>
        </div>
        
        <div className="relative hidden lg:block w-[450px]">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-[#f1f1f1] rounded-full py-2.5 px-5 pl-12 focus:outline-none focus:ring-2 focus:ring-orange-500/20 transition-all"
          />
          <Search className="absolute left-4 top-3 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="flex items-center gap-6 text-[13px] font-semibold text-gray-700">
        <a href="#" className="hover:text-orange-600 transition-colors">Blog</a>
        <a href="#" className="hover:text-orange-600 transition-colors">Pre-order</a>
        <a href="#" className="flex items-center gap-1 hover:text-orange-600 transition-colors">
          <Gift className="w-4 h-4 text-orange-500" /> Offers
        </a>
        <a href="#" className="flex items-center gap-1 hover:text-orange-600 transition-colors">
          <RefreshCw className="w-4 h-4" /> Compare
        </a>
        
        <div className="flex items-center gap-4 border-l pl-6 ml-2">
          <div className="relative cursor-pointer group">
            <div className="bg-black text-white rounded-full p-2 group-hover:bg-orange-600 transition-colors">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </div>
          <div className="border border-gray-300 rounded-full p-1.5 cursor-pointer hover:border-orange-500 transition-colors">
            <User className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      </div>
    </div>

    {/* Main Category Nav */}
    <nav className="bg-white border-t border-b">
      <div className="container mx-auto px-4 flex items-center justify-center lg:justify-between gap-6 py-3 text-[12px] font-bold text-gray-600 overflow-x-auto no-scrollbar uppercase tracking-tight">
        {["Apple Products", "Phones", "Tablets & Accessories", "Computer & Laptops", "Gadgets & Accessories", "Home Appliances", "Lifestyle & Travel", "Camera & Networking"].map((item) => (
          <a key={item} href="#" className="hover:text-orange-500 whitespace-nowrap transition-colors">{item}</a>
        ))}
      </div>
    </nav>
  </header>
);

const HeroSection = () => (
  <section className="container mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-12 gap-5">
    {/* Carousel Main */}
    <div className="md:col-span-8 bg-[#f8f8f8] rounded-3xl overflow-hidden relative group min-h-[400px] flex items-center border border-gray-100">
      <div className="pl-16 z-10">
        <h2 className="text-5xl font-black text-slate-900 leading-tight">
          iPhone <span className="text-orange-500 underline decoration-orange-200">Series</span>
        </h2>
        <p className="text-gray-500 text-lg mt-3 mb-8 font-medium">A studio in your pocket.</p>
        <button className="bg-black text-white px-8 py-3 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200">
          Shop Now
        </button>
      </div>
      
      {/* Visual Phones (Simplified shapes) */}
      <div className="absolute right-10 hidden md:flex gap-4 items-center">
        <div className="w-40 h-80 bg-orange-400 rounded-[3rem] shadow-2xl rotate-3 border-8 border-white"></div>
        <div className="w-40 h-80 bg-green-400 rounded-[3rem] shadow-2xl -rotate-3 border-8 border-white"></div>
      </div>

      <div className="absolute inset-y-0 left-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white/80 p-2 rounded-full shadow-md"><ChevronLeft /></button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white/80 p-2 rounded-full shadow-md"><ChevronRight /></button>
      </div>
    </div>

    {/* Side Banners */}
    <div className="md:col-span-4 flex flex-col gap-5">
      <div className="bg-[#0f172a] text-white p-8 rounded-3xl h-1/2 flex flex-col justify-center relative overflow-hidden group">
        <div className="relative z-10">
          <p className="text-orange-500 font-bold text-sm tracking-widest uppercase mb-2">Apple Gadgets Care</p>
          <h3 className="text-xl font-bold mb-4">Professional Repair Service</h3>
          <p className="text-2xl font-black">09678-149 149</p>
        </div>
        <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform">
           <Zap className="w-40 h-40" />
        </div>
      </div>
      <div className="bg-[#fef3c7] p-8 rounded-3xl h-1/2 flex items-center justify-between border border-orange-100">
        <div>
          <h3 className="text-xl font-black text-slate-800">Panasonic <br/>Mixer Grinder</h3>
          <p className="text-sm font-semibold text-orange-600 mt-2">(3 Jars)</p>
          <div className="mt-4 flex items-center gap-2 text-green-700 font-bold text-xs uppercase">
            <span className="w-6 h-6 bg-green-600 text-white flex items-center justify-center rounded-full">✓</span>
            5 Year Motor Warranty
          </div>
        </div>
        <div className="w-24 h-24 bg-black/5 rounded-full"></div>
      </div>
    </div>
  </section>
);

const ServiceGrid = () => (
  <div className="container mx-auto px-4 py-10">
    <div className="bg-white border rounded-2xl grid grid-cols-2 md:grid-cols-5 divide-x divide-y md:divide-y-0">
      {[
        { icon: <CreditCard className="w-6 h-6" />, title: "36 Months EMI" },
        { icon: <Truck className="w-6 h-6" />, title: "Fastest Home Delivery" },
        { icon: <RefreshCw className="w-6 h-6" />, title: "Exchange Facility" },
        { icon: <Gift className="w-6 h-6" />, title: "Best Price Deals" },
        { icon: <HeadphoneIcon className="w-6 h-6" />, title: "After-Sales Service" },
      ].map((item, i) => (
        <div key={i} className="flex items-center justify-center gap-3 p-6 hover:bg-gray-50 transition-colors">
          <div className="text-orange-500">{item.icon}</div>
          <span className="text-xs font-bold text-slate-700 uppercase">{item.title}</span>
        </div>
      ))}
    </div>
  </div>
);

const CategoryItem = ({ icon, label }) => (
  <div className="flex flex-col items-center gap-3 group cursor-pointer">
    <div className="w-14 h-14 flex items-center justify-center text-slate-400 group-hover:text-orange-500 transition-all transform group-hover:-translate-y-1">
      {icon}
    </div>
    <span className="text-[10px] font-extrabold uppercase text-gray-500 group-hover:text-black tracking-tighter text-center">
      {label}
    </span>
  </div>
);

const ProductCard = ({ name, price, oldPrice, discount, isNew }) => (
  <div className="bg-white border border-gray-100 rounded-3xl p-5 hover:shadow-2xl hover:shadow-orange-100 transition-all group relative">
    {isNew && <span className="absolute top-4 left-4 bg-orange-600 text-white text-[10px] font-black px-2 py-1 rounded">HOT</span>}
    <div className="bg-gray-50 rounded-2xl h-52 mb-5 flex items-center justify-center overflow-hidden">
      <Smartphone className="w-24 h-24 text-gray-300 group-hover:scale-110 group-hover:text-orange-200 transition-all duration-500" />
    </div>
    <h4 className="font-bold text-slate-800 text-sm group-hover:text-orange-600 transition-colors line-clamp-1">{name}</h4>
    <div className="mt-4">
      <span className="text-xl font-black text-slate-900">৳ {price}</span>
      <div className="flex items-center gap-3 mt-1">
        <span className="text-xs text-gray-400 line-through font-bold">৳ {oldPrice}</span>
        <span className="text-[10px] bg-green-100 text-green-600 px-2 py-0.5 rounded-full font-black">
          ৳ {discount} OFF
        </span>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-black text-gray-400 pt-20 pb-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-white/10 pb-16">
        <div className="space-y-6">
           <h2 className="text-2xl font-bold text-white"><span className="text-orange-500">gadgets</span></h2>
           <div>
             <p className="text-[11px] font-bold text-gray-500 uppercase mb-2">Phone Number</p>
             <p className="text-white font-black text-lg">09678148148</p>
           </div>
           <div>
             <p className="text-[11px] font-bold text-gray-500 uppercase mb-2">Email Address</p>
             <p className="text-white font-medium hover:text-orange-500 cursor-pointer">contact@applegadgetsbd.com</p>
           </div>
           <div className="flex gap-3">
             <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-white text-xs border border-white/10 transition-colors">App Store</button>
             <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-white text-xs border border-white/10 transition-colors">Google Play</button>
           </div>
        </div>

        <div>
          <h4 className="text-white font-black text-xs uppercase mb-8 tracking-widest">Location</h4>
          <ul className="space-y-5 text-[13px] font-medium">
            <li className="hover:text-white cursor-pointer">Bashundhara City Shopping Complex <br/><span className="text-[10px] text-gray-600 font-bold uppercase">Basement 2, Shop 28</span></li>
            <li className="hover:text-white cursor-pointer">Jamuna Future Park <br/><span className="text-[10px] text-gray-600 font-bold uppercase">Level 4, Zone A (West Court)</span></li>
            <li className="hover:text-white cursor-pointer">AG Care | Bashundhara City <br/><span className="text-[10px] text-gray-600 font-bold uppercase">Level 3, Block B, Shop 07</span></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black text-xs uppercase mb-8 tracking-widest">Company</h4>
          <ul className="space-y-4 text-[13px] font-medium">
            {["About Us", "Corporate", "Order Tracking", "Blog", "Careers", "Contact Us", "FAQs"].map(item => (
              <li key={item} className="hover:text-orange-500 cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-black text-xs uppercase mb-8 tracking-widest">Policies</h4>
          <ul className="space-y-4 text-[13px] font-medium">
            {["Privacy Policy", "Warranty Policy", "Exchange Policy", "Delivery Policy", "Refund Policy"].map(item => (
              <li key={item} className="hover:text-orange-500 cursor-pointer transition-colors">{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[11px] font-bold text-gray-600">© 2026 Thanks From Apple Gadgets | All rights reserved</p>
        <div className="flex items-center gap-8">
           <div className="flex items-center gap-2 bg-green-600/10 text-green-500 px-4 py-2 rounded-full cursor-pointer hover:bg-green-600 hover:text-white transition-all">
              <span className="text-xs font-black">WhatsApp</span>
           </div>
           <div className="flex gap-5 text-white/50">
             <span className="hover:text-white cursor-pointer font-bold">FB</span>
             <span className="hover:text-white cursor-pointer font-bold">IG</span>
             <span className="hover:text-white cursor-pointer font-bold">LI</span>
           </div>
        </div>
      </div>
    </div>
  </footer>
);

// --- Main App ---

const App = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      <Navbar />
      
      <main className="pb-20">
        <HeroSection />
        <ServiceGrid />

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-black mb-10 text-slate-800">
            Featured <span className="text-purple-600">Categories</span>
          </h2>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-y-12">
            <CategoryItem icon={<Smartphone />} label="Mobile Phone" />
            <CategoryItem icon={<Monitor />} label="Home Appliances" />
            <CategoryItem icon={<Tablet />} label="Tablet" />
            <CategoryItem icon={<HeadphoneIcon />} label="Wired Headphone" />
            <CategoryItem icon={<Laptop />} label="Laptop" />
            <CategoryItem icon={<HeadphoneIcon />} label="Airpods" />
            <CategoryItem icon={<Watch />} label="Smart Watch" />
            <CategoryItem icon={<Speaker />} label="Speakers" />
            <CategoryItem icon={<Zap />} label="Starlink" />
            <CategoryItem icon={<Cable />} label="Adapter" />
            <CategoryItem icon={<Cable />} label="Cables" />
            <CategoryItem icon={<Zap />} label="Hubs & Docks" />
            <CategoryItem icon={<Zap />} label="Wireless Charger" />
            <CategoryItem icon={<MousePointer2 />} label="Smart Pen" />
          </div>
        </section>

        {/* Product Trends Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-slate-800">New <span className="text-orange-500">Trends</span></h2>
              <div className="w-12 h-1.5 bg-orange-500 mt-2 rounded-full"></div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-full hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <ProductCard name="iPhone 17 Pro Max" price="170,500" oldPrice="175,000" discount="4,500" isNew />
            <ProductCard name="Galaxy S26 Ultra 5G" price="137,500" oldPrice="175,000" discount="37,500" />
            <ProductCard name="Galaxy A57 5G" price="58,000" oldPrice="62,000" discount="4,000" />
            <ProductCard name="Galaxy A37 5G" price="44,000" oldPrice="48,000" discount="4,000" />
            <ProductCard name="Redmi Pad 2" price="26,500" oldPrice="29,000" discount="2,500" />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;