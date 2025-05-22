import React from "react";

export default function GalleryPage() {
  return (
    <div
      className="p-8 space-y-8 bg-cover bg-center"
      style={{ backgroundImage: "url('/IMG_7575.JPG')" }}
    >
      {/* Logo */}
      <div className="flex justify-center">
        <img src="/2c77e6d7-327b-44df-b78f-5710e796f331.jpg" alt="Angela Ratoi Fotografía" className="h-32" />
      </div>

      <h2 className="text-3xl font-bold text-center bg-white bg-opacity-70 p-4 rounded-xl">
        Reserva tu sesión y no dejes que el tiempo se escape.
      </h2>

      {/* Familias */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Familias</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/MADA111.jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
          <img src="/mada.jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
          <img src="/ALEX Y MAMA20.jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
          <img src="/Evotoa-(1 of 1)_(2).jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
          <img src="/IMG_8781_jpg 2.JPG" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
        </div>
      </section>

      {/* Newborn */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Newborn</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/february69.jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
        </div>
      </section>

      {/* Embarazo */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Embarazo</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/ALEX Y MAMA20.jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
        </div>
      </section>

      {/* Individual */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Individual</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/february69.jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
        </div>
      </section>

      {/* Smashcake */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Smashcake</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img src="/BEBE-(1 of 1)_(13)-2.jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
          <img src="/BEBE-(1 of 1)_(22)-2.jpg" className="rounded-2xl shadow-lg aspect-square object-cover" alt="" />
        </div>
      </section>

      {/* Contacto */}
      <section className="text-center mt-16 space-y-4 bg-white bg-opacity-80 p-6 rounded-xl">
        <h3 className="text-2xl font-bold">Contáctame</h3>
        <p className="text-lg">📞 Teléfono: <strong>643670682</strong></p>
        <p className="text-lg">📧 Email: <strong>angelaratoi10@gmail.com</strong></p>
        <p className="text-lg">📷 Instagram: <a href="https://instagram.com/angelaratoifotografia" target="_blank" className="text-blue-600 underline">@angelaratoifotografia</a></p>
        <button className="mt-4 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full shadow-md transition duration-300">
          Reserva tu sesión ahora
        </button>
      </section>
    </div>
  );
}
