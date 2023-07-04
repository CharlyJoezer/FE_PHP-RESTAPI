import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../css/Home.css";

export default function Home() {
  return (
    <div className="container-home">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={true}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="slides"
      >
        <SwiperSlide>
          <img
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/3/4ad660ce-e4cc-46a6-a3c1-398c141d794b.jpg.webp?ect=4g"
            alt="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/3/4ad660ce-e4cc-46a6-a3c1-398c141d794b.jpg.webp?ect=4g"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/3/b2b5502e-3627-4c3b-8eac-f7c02175d371.jpg.webp?ect=4g"
            alt="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/7/3/b2b5502e-3627-4c3b-8eac-f7c02175d371.jpg.webp?ect=4g"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/6/30/d8089e55-2112-4427-ace3-ce36f6dcc7d8.jpg.webp?ect=4g"
            alt="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/6/30/d8089e55-2112-4427-ace3-ce36f6dcc7d8.jpg.webp?ect=4g"
          />
        </SwiperSlide>
      </Swiper>

      <div className="categories">
        <div className="category-item">
          <img src="assets/icon/mobile-game.png" alt="mobile-gaming" />
          <span className="category-name">Gaming</span>
        </div>
        <div className="category-item">
          <img src="assets/icon/pakaian.png" alt="pakaian" />
          <span className="category-name">Pakaian</span>
        </div>
        <div className="category-item">
          <img src="assets/icon/makanan.png" alt="makanan" />
          <span className="category-name">Makanan</span>
        </div>
        <div className="category-item">
          <img src="assets/icon/other.png" alt="lainnya" />
          <span className="category-name">Lainnya</span>
        </div>
      </div>
    </div>
  );
}
