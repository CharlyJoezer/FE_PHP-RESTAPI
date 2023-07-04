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

      <div className="text-header">Temukan Produkmu</div>
      <div className="products">
        <div className="product">
          <img
            className="product-image"
            src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/1/11/fe4b1b65-93b4-4f95-bebf-ddcd9f88c65d.jpg"
            alt="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2023/1/11/fe4b1b65-93b4-4f95-bebf-ddcd9f88c65d.jpg"
          />
          <div className="product-desc">
            <span className="product-name">Mousepad Gaming</span>
            <span className="product-price">Rp 59.000</span>
            <span className="product-location">
              <img src="assets/icon/location.png" alt="location" />
              <span>Jakarta Selatan</span>
            </span>
          </div>
        </div>

        <div className="product">
          <img
            className="product-image"
            src="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/11/17/ac76b824-0499-4101-95e1-616bb8dc9d72.jpg"
            alt="https://images.tokopedia.net/img/cache/300-square/VqbcmM/2022/11/17/ac76b824-0499-4101-95e1-616bb8dc9d72.jpg"
          />
          <div className="product-desc">
            <span className="product-name">Pelurus rambut</span>
            <span className="product-price">Rp 73.000</span>
            <span className="product-location">
              <img src="assets/icon/location.png" alt="location" />
              <span>Jakarta Selatan</span>
            </span>
          </div>
        </div>

        <div className="product">
          <img
            className="product-image"
            src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/5/14/31f7ff85-1319-4782-ad83-5908ebf36d44.jpg"
            alt="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2020/5/14/31f7ff85-1319-4782-ad83-5908ebf36d44.jpg"
          />
          <div className="product-desc">
            <span className="product-name">Mousepad Gaming</span>
            <span className="product-price">Rp 59.000</span>
            <span className="product-location">
              <img src="assets/icon/location.png" alt="location" />
              <span>Jakarta Selatan</span>
            </span>
          </div>
        </div>

        <div className="product">
          <img
            className="product-image"
            src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/9/0756df71-e25a-43fd-a9ca-4a75f6f5ccf7.jpg"
            alt="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/9/0756df71-e25a-43fd-a9ca-4a75f6f5ccf7.jpg"
          />
          <div className="product-desc">
            <span className="product-name">Mousepad Gaming</span>
            <span className="product-price">Rp 59.000</span>
            <span className="product-location">
              <img src="assets/icon/location.png" alt="location" />
              <span>Jakarta Selatan</span>
            </span>
          </div>
        </div>

        <div className="product">
          <img
            className="product-image"
            src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/9/0756df71-e25a-43fd-a9ca-4a75f6f5ccf7.jpg"
            alt="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/9/0756df71-e25a-43fd-a9ca-4a75f6f5ccf7.jpg"
          />
          <div className="product-desc">
            <span className="product-name">Mousepad Gaming</span>
            <span className="product-price">Rp 59.000</span>
            <span className="product-location">
              <img src="assets/icon/location.png" alt="location" />
              <span>Jakarta Selatan</span>
            </span>
          </div>
        </div>

        <div className="product">
          <img
            className="product-image"
            src="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/9/0756df71-e25a-43fd-a9ca-4a75f6f5ccf7.jpg"
            alt="https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/8/9/0756df71-e25a-43fd-a9ca-4a75f6f5ccf7.jpg"
          />
          <div className="product-desc">
            <span className="product-name">Mousepad Gaming</span>
            <span className="product-price">Rp 59.000</span>
            <span className="product-location">
              <img src="assets/icon/location.png" alt="location" />
              <span>Jakarta Selatan</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
