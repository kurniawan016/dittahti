<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
import { onMounted } from 'vue'
import { 
    initAccordions, 
    initCarousels, 
    initCollapses, 
    initDials, 
    initDismisses, 
    initDrawers, 
    initDropdowns, 
    initModals, 
    initPopovers, 
    initTabs, 
    initTooltips } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initAccordions();
    initCarousels();
    initCollapses();
    initDials();
    initDismisses();
    initDrawers();
    initDropdowns();
    initModals();
    initPopovers();
    initTabs();
    initTooltips();
})
</script>


<template>
    <main>
        <Navbar/>
    </main>

    <div class="container p-2 mx-auto mt-2 rounded-md bg-slate-200">
    <div class="flex">
      <div class="w-full">
          <img class="w-full rounded-md" src="https://akcdn.detik.net.id/community/media/visual/2022/08/20/pelaku-pemalsuan-stnk-di-mataram-dibekuk-polisi-sabtu-2082022_43.jpeg?w=250&q=" alt="">
      </div>
      <div class="w-full pl-4">
        <h1 class="text-2xl font-bold"> Buron 8 Bulan, Kakek Pemalsu STNK Dibekuk di Mataram"</h1>
        <p class="mt-2">Mataram - Pelaku pemalsuan surat tanda nomor kendaraan (STNK) inisial WP (57) asal Lendang Lekong Timur, Kelurahan Mandalika, Kecamatan Sandubaya, Kota Mataram, NTB dibekuk polisi. WP berhasil ditangkap usai buron 8 bulan<br><br>

Pelaku WP rupanya memalsukan STNK kendaraan roda dua menjadi roda STNK kendaraan roda empat untuk digadaikan ke korban. Selain itu, pelaku produksi nomor seri kendaraan STNK di Denpasar Bali.<br><br>

Kasat Reskrim Polresta Mataram Kompol Kadek Adi Budi Astawa mengatakan pelaku rupanya menggunakan material STNK asli yang dikeluarkan oleh pihak Samsat di wilayah NTB.<br><br>
</p>
          <div class="flex mt-16">
            <div class="w-full"><h1 class="text-gray-400">Selasa 12/05/2023</h1></div>
          </div>
      </div>
    </div>
  </div>
  <div class="container mx-auto mt-4">
    <main>
        <Footer/>
    </main>
  </div>
</template>