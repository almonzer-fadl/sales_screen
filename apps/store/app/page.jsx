import Image from "next/image";
import HeroMain from "../../../packages/ui/components/HeroMain/HeroMain";
import FooterMain from "../../../packages/ui/components/FooterMain";
import SliderProduct from '../../../packages/ui/components/SliderProduct';
import { carProducts } from './data/productData';
import HeaderTop from "../../../packages/ui/components/HeaderTop";
import NavbarMain from "../../../packages/ui/components/NavbarMain";
import NavLinks from "../../../packages/ui/components/NavLinks";
import styles from './page.module.css';
import { categories } from './data/categories';
import Link from 'next/link';
import SliderCategory from '../../../packages/ui/components/SliderCategory/SliderCategory';
import SectionProductGrid from '../../../packages/ui/components/SectionProductGrid';

export default function Home() {
  return (
    <div className="page-transition min-h-screen flex flex-col">
      <HeaderTop />
      <NavbarMain />
      <NavLinks />
      <main className={`flex-grow ${styles.mainContent}`}>
        <div className={styles.contentContainer}>
          <HeroMain />
          
          {/* Category Slider Component */}
          <SliderCategory />
          
          <SliderProduct categoryData={carProducts.Offers} sectionId="car-products" />
          
          <SliderProduct categoryData={carProducts.SpareParts} sectionId="spare-parts" />
          
          {/* First two rows of products */}
          <SectionProductGrid startRow={0} numRows={2} />
          
          {/* Third Slider */}
          <SliderProduct categoryData={carProducts.Accessories} sectionId="accessories" />
          
          {/* Remaining rows of products */}
          <SectionProductGrid startRow={2} numRows={6} />

          {/* Category Slider Component */}
          <SliderCategory />

          {/* Remaining rows of products */}
          <SectionProductGrid startRow={6} numRows={7} />

          {/* Last Slider */}
          <SliderProduct categoryData={carProducts.Accessories} sectionId="accessories" />

          {/* Remaining rows of products */}
          <SectionProductGrid startRow={7} numRows={38} />
        </div>
      </main>
      <FooterMain />
    </div>
  );
} 