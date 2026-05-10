'use client'
import { useState } from 'react'

export default function OattbeBeauticeShop() {
  const categories = [
    'Tozalash',
    'Losyon',
    'Essensiya',
    'Serum',
    'Krem',
    'Maska',
    'Makiyaj',
  ];

  const [search, setSearch] = useState('')

  const products = [
    {
      name: 'OATTBE Exosome Apple Essence',
      price: '480 000 so‘m',
      oldPrice: '550 000 so‘m',
      image:
        'https://oattbe.shop/cdn/shop/files/8_814ac7f8-075f-494d-9a5e-0a71f9a7058f.jpg?v=1766103815&width=1000',
      badge: 'NEW',
    },
    {
      name: 'Oattbe Apple Exosome Cream',
      price: '420 000 so‘m',
      oldPrice: '490 000 so‘m',
      image:
        'https://koreashop.jp/wp-content/uploads/2026/04/mhglobal-exosome-cream-50g_t06.jpg',
      badge: 'NEW',
    },
    {
      name: 'OATTBE Daily BB Cream',
      price: '265 000 so‘m',
      oldPrice: '320 000 so‘m',
      image:
        'https://oattbe.shop/cdn/shop/files/5_20ecb7b6-6a44-4d52-9e15-88d11c0747ca.jpg?crop=center&height=1200&v=1705568738&width=1200',
      badge: 'TOP',
    },
    {
      name: 'Oattbe Glow Sun Essence',
      price: '280 000 so‘m',
      oldPrice: '340 000 so‘m',
      image:
        'https://oattbe.shop/cdn/shop/files/ChatGPTImage2025_11_17_05_43_45.png?v=1766106091&width=1024',
      badge: 'TOP',
    },
    {
      name: 'Oattbe Syn Bio Beta Glucans Brightening Cream',
      price: '280 000 so‘m',
      oldPrice: '340 000 so‘m',
      image:
        'https://www.oattbe.net/cdn/shop/files/oattbenewphoto01_9.jpg?v=1689287670&width=2048',
      badge: 'BEST',
    },
    {
      name: 'Oattbe Syn Bio Beta Glucans Serum',
      price: '340 000 so‘m',
      oldPrice: '390 000 so‘m',
      image:
        'https://i.pinimg.com/736x/4a/60/7e/4a607eae09ee13f36bccef2837628409.jpg',
      badge: 'BEST',
    },
    {
      name: 'Oattbe Syn Bio B-Glucans Eye cream',
      price: '260 000 so‘m',
      oldPrice: '340 000 so‘m',
      image:
        'https://facecare.lt/cdn/shop/files/OattbeSynBioB-GlucansEyeCreampaakiukremas_30g.2.jpg?v=1755791300&width=1946',
      badge: 'BEST',
    },
    {
      name: 'Oattbe soothing return Face Mask',
      price: '340 000 so‘m',
      oldPrice: '380 000 so‘m',
      image:
        'https://elora.boutique/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-19-at-10.05.37-PM-600x600.jpeg?crop=1',
      badge: 'BEST',
    },
    {
      name: 'Oattbe Syn Bio Beta Glucans Facial Cleanser',
      price: '260 000 so‘m',
      oldPrice: '330 000 so‘m',
      image:
        'https://www.oattbe.net/cdn/shop/files/OattbeCleansingGel_3.png?v=1688264746&width=1200',
      badge: 'BEST',
    },
    {
      name: 'Oattbe Contour V-fit Face Pack',
      price: '349 000 so‘m',
      oldPrice: '390 000 so‘m',
      image:
        'https://www.oattbe.net/cdn/shop/files/OattbeVfitfacepack_3.jpg?v=1749024808&width=1500',
      badge: 'BEST',
    },
    {
      name: 'Oattbe Quatro Repair Cream',
      price: '280 000 so‘m',
      oldPrice: '340 000 so‘m',
      image:
        'https://www.oattbe.net/cdn/shop/files/gps_generated.png?v=1737251266&width=1024',
      badge: 'BEST',
    },
    {
      name: 'Oattbe Quatro Melano Cream',
      price: '260 000 so‘m',
      oldPrice: '320 000 so‘m',
      image:
        'https://goldylocks.ru/wp-content/uploads/2024/07/9_-_2024-04-05t18035.jpg',
      badge: 'BEST',
    },
    {
      name: 'Oattbe Glow Fit Cover Cushion no 22',
      price: '280 000 so‘m',
      oldPrice: '370 000 so‘m',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5yvF3d8qaDH_9wLCCk1vjv--iUTi9j7MTKw&s',
      badge: 'BEST',
    },
    {
      name: 'PREMIUM PERFECTING GLOW LIP BALM– Plant-Based Tinted Care with PLUMP',
      price: '200 000 so‘m',
      oldPrice: '280 000 so‘m',
      image:
        'https://www.oattbe.net/cdn/shop/files/premiumperfectingglowLipBalm_7.jpg?v=1744878873&width=750',
      badge: 'BEST',
    },
    {
      name: 'PEDATOSOL SynBio Moisture Face & Body Lotion',
      price: '350 000 so‘m',
      oldPrice: '410 000 so‘m',
      image:
        'https://www.oattbe.net/cdn/shop/files/PEDATOSOLBabyOatmealLotion_1_100d1686-4a07-4a48-9ae4-a44574e3a3c7.jpg?v=1773296903&width=2048',
      badge: 'BEST',
    },
    {
      name: 'PEDATOSOL Baby Oatmeal Lotion',
      price: '350 000 so‘m',
      oldPrice: '420 000 so‘m',
      image:
        'https://www.oattbe.net/cdn/shop/files/PEDATOSOLBabyOatmealLotion_6.jpg?v=1774761849&width=2000',
      badge: 'BEST',
    },
  ];

  const filteredProducts = products.filter((product) =>
product.name.toLowerCase().includes(search.toLowerCase())
)


  return (
    <div className="bg-[#fff9f8] min-h-screen text-[#2b2b2b] overflow-hidden">
      {/* TOP BAR */}
      <div className="bg-gradient-to-r from-orange-100 to-orange-300 text-black text-sm py-3 px-6 text-center">
        OATTBE Korean Premium Skincare Sog'lom Porlash to'plami ✨
      </div>

      {/* NAVBAR */}
      <header className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://www.oattbe.net/cdn/shop/files/logo_png.png?v=1649426558&width=290"
              alt="Oattbe"
              className="h-14 object-contain"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-gray-600">
            <a href="#home" className="hover:text-[#b86b85] transition">
              Bosh sahifa
            </a>

            <a href="#categories" className="hover:text-[#b86b85] transition">
              Kategoriyalar
            </a>

            <a href="#products" className="hover:text-[#b86b85] transition">
              Mahsulotlar
            </a>

            <a href="#reviews" className="hover:text-[#b86b85] transition">
              Fikrlar
            </a>
          </nav>

          <div className="flex items-center gap-4">
          <input
            type="search"
            placeholder="Mahsulotni qidirish..."
            autoComplete="off"
            value={search}
            onChange={(e) => {
            setSearch(e.target.value)
            }}
            className="
            w-[210px]
            px-5
            py-3
            rounded-full
            bg-white
            border
            border-[#d9dee5]
            text-black
            outline-none
            focus:ring-2
            focus:ring-[#c7a58a]
            "
          />
          
            <button className="w-11 h-11 rounded-full bg-[#f6efe7] hover:bg-[#b79276] flex items-center justify-center text-xl relative">
              🛒
              <span className="absolute -top-1 -right-1 bg-[#ff7f9d] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        id="home"
        className="relative max-w-7xl mx-auto px-6 py-14 grid lg:grid-cols-2 gap-14 items-center"
      >
        <div>
          <span className="bg-[#f6efe7] text-[#8b8178] px-5 py-2 rounded-full text-sm inline-block mb-8">
            Oattbega hush kelipsiz!
          </span>

          <h1 className="text-4xl lg:text-7xl font-bold leading-tight mb-8">
            Oattbe — Sog'lom
            <br />
            Porlash bilan
            <br />
            Boshlanadi ✨
          </h1>

          <p className="text-lg text-[#8b8178] leading-relaxed mb-10 max-w-xl">
            Koreya premium mahsulotlari bilan teringizga professional va
            zamonaviy parvarish bering.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://t.me/oattbe"
              target="_blank"
              className="bg-[#c7a58a] hover:bg-[#b79276] hover:from-[#aeb7c2] hover:to-[#7f8997] text-white px-6 py-4 rounded-full hover:scale-105 transition shadow-xl"
            >
              Sotib olish
            </a>

            <a
              href="#products"
              className="border border-[#d9dee5] px-6 py-4 rounded-full hover:bg-[#fff0f4] transition"
            >
              Mahsulotlarni ko‘rish
            </a>
          </div>
        </div>

        <div className="relative flex justify-center">
          <div className="absolute w-[500px] h-[500px] bg-[#eef2f6] rounded-full blur-3xl opacity-50"></div>

          <img
            src="https://www.oattbe.net/cdn/shop/files/4_4.jpg?v=1763714053&width=3200"
            alt="Hero Product"
            className="relative z-10 w-full max-w-lg drop-shadow-[0_40px_80px_rgba(0,0,0,0.18)]"
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section id="categories" className="max-w-4xl mx-auto px-6 py-1">
        <div className="bg-gradient-to-br from-[#fffaf7] to-[#f1e6db] rounded-[40px] p-10 shadow-sm">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-5">
            <div>
              <p className="text-[#8b8178] uppercase tracking-[0.3em] text-sm mb-3">
                Top Categories
              </p>

              <h2 className="text-4xl font-bold">Bizning kategoriyalar</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-[#c7a58a] hover:bg-[#b79276] rounded-[30px] p-8 border border-[#d9dee5] shadow-lg hover:scale-105 transition duration-300 rounded-[30px] p-8 hover:-translate-y-2 transition duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm mb-6">
                  ✨
                </div>

                <h3 className="text-2xl font-semibold mb-3">{category}</h3>

                <p className="text-black/70 leading-relaxed text-sm">
                  Premium Korea Parvarishlar to'plami.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-wrap items-center justify-between gap-5 mb-14">
          <div>
            <p className="text-[#8b8178] uppercase tracking-[0.3em] text-sm mb-3">
              Barcha Mahsulotlar
            </p>

            <h2 className="text-4xl font-bold">Oattbe Lineykalari</h2>
          </div>

          {/* <button className="bg-white border border-pink-100 px-6 py-3 rounded-full">
            Mahsulotlarni filtrlash
          </button> */}
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-10">
          {/* SIDEBAR */}
          {/* <div className="bg-white rounded-[40px] p-8 h-fit shadow-sm">
            <h3 className="text-2xl font-semibold mb-8">
              Narxlar bilan filtrlash
            </h3>

            <div className="space-y-5 text-[#2b2f36] mb-10">
              <div className="flex items-center justify-between">
                <span>200k - 400k</span>
                <span>12</span>
              </div>

              <div className="flex items-center justify-between">
                <span>400k - 600k</span>
                <span>8</span>
              </div>

              <div className="flex items-center justify-between">
                <span>600k+</span>
                <span>4</span>
              </div>
            </div>

            <h3 className="text-2xl font-semibold mb-8">Categories</h3>

            <div className="space-y-4 text-[#2b2f36]">
              <div>Essence</div>
              <div>Serum</div>
              <div>Cream</div>
              <div>Mask</div>
            </div>
          </div> */}

          {/* PRODUCT GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {products
.filter((product) =>
product.name.toLowerCase().includes(search.toLowerCase())
)
.map((product, index) => (

              <div
                key={index}
                className="bg-white rounded-[36px] overflow-hidden shadow-sm hover:shadow-2xl transition duration-500"
              >
                <div className="relative bg-[#f6efe7] p-8">
                  <div className="absolute top-5 left-5 bg-[#c7a58a] text-white text-xs px-4 py-2 rounded-full">
                    {product.badge}
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[260px] object-contain"
                  />
                </div>

                <div className="p-7">
                  <h3 className="text-xl font-semibold leading-snug mb-4">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-large font-bold text-black/70">
                      {product.price}
                    </span>

                    <span className="text-[#b8aaa0] line-through text-sm">
                      {product.oldPrice}
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="https://t.me/oattbe"
                      target="_blank"
                      className="flex-1 bg-gradient-to-r from-[#1f1f1f] to-[#3a3a3a] hover:from-[#2b2b2b] hover:to-[#4a4a4a] text-white py-4 rounded-full text-center hover:scale-105 transition"
                    >
                      Buyurtma
                    </a>

                    <button className="w-14 h-14 rounded-full bg-gradient-to-r from-[#1f1f1f] to-[#3a3a3a] hover:from-[#2b2b2b] hover:to-[#4a4a4a] text-white text-2xl">
                      ❤
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="reviews" className="max-w-7xl mx-auto px-6 py-1">
        <div className="bg-white rounded-[50px] p-12 shadow-sm">
          <div className="text-center mb-14">
            <p className="text-[#8b8178] uppercase tracking-[0.3em] text-sm mb-4">
              Reviews
            </p>

            <h2 className="text-5xl font-bold">Mijozlar fikri</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              '1 haftada yuzim juda namlandi va siyanie paydo bo‘ldi.',
              'Mahsulot juda yaxshi teriga tez singadi.',
              'Tasirchan teri uchun juda yaxshi ekan.',
            ].map((review, index) => (
              <div key={index} className="bg-[#f6efe7] rounded-[36px] p-10">
                <div className="text-5xl text-pink-200 mb-5">“</div>

                <p className="text-[#8b8178] text-lg leading-relaxed mb-8">
                  {review}
                </p>

                <div className="font-semibold">— OATTBE Mijozi</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-[#fff6f8] hover:from-[#aeb7c2] hover:to-[#7f8997] rounded-[50px] p-14 lg:p-20 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8">
            Teringizga Go'zal
            <br />
            Jilov Bering ✨
          </h2>

          <p className="text-lg text-[#8b8178] max-w-2xl mx-auto mb-10 leading-relaxed">
            OATTBE bilan professional parvarish va premium natijani his qiling.
          </p>

          <a
            href="https://t.me/oattbe"
            target="_blank"
            className="bg-gradient-to-r from-[#1f1f1f] to-[#3a3a3a] hover:from-[#2b2b2b] hover:to-[#4a4a4a] text-white px-10 py-5 rounded-full inline-block hover:scale-105 transition"
          >
            Hozir buyurtma berish
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-r from-orange-100 to-orange-300 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-4 gap-14">
          <div>
            <img
              src="https://www.oattbe.net/cdn/shop/files/logo_png.png?v=1649426558&width=290"
              alt="Oattbe"
              className="h-16 mb-6 brightness-200"
            />

            <p className="text-black/70 leading-relaxed">
              Korean premium skincare mahsulotlari.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Kategoriyalar</h3>

            <div className="space-y-4 text-black/70">
              <div>Essence</div>
              <div>Serum</div>
              <div>Cream</div>
              <div>Mask</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Aloqa</h3>

            <div className="space-y-4 text-black/70">
              <p>+998 90 985 69 32</p>
              <p>@oattbe_uzbekistan</p>
              <p>@oattbe</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Follow us</h3>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/oattbe_uzbekistan"
                target="_blank"
                className="bg-white/10 px-5 py-3 rounded-full"
              >
                Instagram
              </a>

              <a
                href="https://t.me/oattbe"
                target="_blank"
                className="bg-white/10 px-5 py-3 rounded-full"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#eadfd3] text-center py-6 text-black/70 text-sm">
          © 2026 OATTBE Uzbekistan. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </div>
  );
}
