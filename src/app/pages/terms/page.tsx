import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";

export default function Terms() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title="Terms of Service"></HeroDetails>
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <div className="space-y-5 lg:space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    Our Performance
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-neutral-200">
                    Sed ac sollicitudin ipsum. Vivamus vulputate, enim sit amet
                    aliquet lacinia, ex mauris aliquam elit, vel pharetra augue
                    arcu ultricies magna. Suspendisse justo erat, dignissim ut
                    imperdiet ut, convallis vitae urna. Vivamus tincidunt
                    lacinia metus sed suscipit. Phasellus luctus rhoncus mauris
                    ut euismod. Aliquam elementum malesuada erat, vitae bibendum
                    ex rutrum eget. Mauris sed nunc mauris. Curabitur semper sed
                    justo a pellentesque. In hac habitasse platea dictumst.
                    Mauris semper volutpat iaculis. Vestibulum ante ipsum primis
                    in faucibus orci luctus et ultrices posuere cubilia curae;
                    Curabitur consectetur dignissim nulla id ornare. Praesent
                    placerat dolor vitae tellus lacinia, a malesuada est
                    sodales. Praesent at consectetur sem, sed scelerisque arcu.
                    Maecenas malesuada lorem id sagittis scelerisque. In hac
                    habitasse platea dictumst.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    Cookie
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-neutral-200">
                    Pellentesque sit amet nulla facilisis, lobortis ex at,
                    consequat diam. Pellentesque sed dui lorem. Aliquam vel
                    euismod nunc. Nulla facilisi. Donec consectetur faucibus
                    rutrum. Pellentesque ac ultricies sapien, ac iaculis erat.
                    Vivamus posuere eget nulla sit amet vehicula. Donec finibus
                    maximus eros, at tincidunt ipsum vestibulum ac. Integer vel
                    metus vehicula, consequat velit a, eleifend mi. Curabitur
                    erat mauris, luctus non dictum vel, fringilla dignissim
                    quam. Phasellus eleifend porta fermentum. Pellentesque
                    posuere massa vitae odio pulvinar feugiat. Fusce a risus
                    sodales, maximus sapien sit amet, pharetra ipsum. Vivamus
                    varius eros ac sapien pulvinar, nec tincidunt dui bibendum.
                    Proin consectetur nibh tortor, nec vulputate ex posuere
                    eget.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    Payments
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-neutral-200">
                    Amet nulla facilisis, lobortis ex at, consequat diam.
                    Pellentesque sed dui lorem. Aliquam vel euismod nunc. Nulla
                    facilisi. Donec consectetur faucibus rutrum. Pellentesque ac
                    ultricies sapien, ac iaculis erat. Vivamus posuere eget
                    nulla sit amet vehicula. Donec finibus maximus eros, at
                    tincidunt ipsum vestibulum ac. Integer vel metus vehicula,
                    consequat velit a, eleifend mi. Curabitur erat mauris,
                    luctus non dictum vel, fringilla dignissim quam. Phasellus
                    eleifend porta fermentum. Pellentesque posuere massa vitae
                    odio pulvinar feugiat. Fusce a risus sodales, maximus sapien
                    sit amet, pharetra ipsum. Vivamus varius eros ac sapien
                    pulvinar, nec tincidunt dui bibendum. Proin consectetur nibh
                    tortor, nec vulputate ex posuere eget.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LandingLayout>
      <Footer />
    </main>
  );
}
