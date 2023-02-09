export default function Footer() {
  return (
    <footer className='fixed bottom-0 left-0 w-full bg-custom-blue-00'>
      <div className='flex items-center justify-between px-16 py-6 max-w-screen-xl mx-auto w-full'>
        <h4 className='text-white w-full font-semibold'>
          Investasi crypto simple, aman, dan tanpa ribet. Mulai dari Rp 11.000.
          Tertarik mulai berinvestasi?
        </h4>
        <a
          className='bg-white text-custom-blue-00 py-3 px-12 text-sm font-semibold whitespace-nowrap rounded-lg'
          href='https://pintu.co.id/download?src=/market'
        >
          Unduh Pintu App
        </a>
      </div>
    </footer>
  );
}
