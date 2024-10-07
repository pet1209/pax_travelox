import LandingLayout from "../../../components/layout/Landing";
import { HeroDetails } from "../../../components/Hero";
import { Footer } from "../../../components/Footer";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-1 flex-col">
      <LandingLayout>
        <div>
          <HeroDetails title=" Privacy Policy"></HeroDetails>
          <section className="py-12 container">
            <div className="max-w-full  md:pb-4 mx-auto">
              <div className="space-y-5 lg:space-y-8">
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    Privacy Policy
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-neutral-200">
                    Aenean ullamcorper est est, ac bibendum ipsum tincidunt
                    vehicula. Nulla faucibus vulputate lorem, vitae placerat
                    felis blandit ut. Nam sem quam, euismod sit amet augue et,
                    mollis congue nisi. Vestibulum fringilla lobortis nunc ac
                    tincidunt. Cras nec convallis quam. Maecenas non sem ut enim
                    facilisis rhoncus. Sed odio ex, efficitur ac commodo sed,
                    convallis vitae lectus. Aenean at urna ac tellus ullamcorper
                    pretium. Aliquam erat volutpat. Aliquam sit amet tellus in
                    tortor posuere convallis quis nec tellus. Nulla eu mauris
                    sit amet enim eleifend congue. Quisque aliquam, turpis quis
                    elementum tempus, velit arcu dignissim dui, a vehicula
                    lectus nisi non felis.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    Collect Information:
                  </h3>
                  <p className="text-lg text-gray-800 dark:text-neutral-200">
                    Donec ac pulvinar diam, ac mollis augue. Etiam interdum
                    fringilla magna, at placerat libero malesuada sed. Proin
                    tincidunt a sapien at facilisis. Cras nec lectus pretium,
                    convallis tellus eu, placerat augue. Curabitur luctus odio
                    efficitur elit volutpat, quis venenatis tellus vestibulum.
                    Nam ultrices massa id tellus commodo, at mollis elit mattis.
                    Etiam eget ultrices lectus, at faucibus mauris. Integer at
                    mauris ex. Vivamus interdum cursus mi quis venenatis. Sed
                    pulvinar efficitur quam quis congue. Ut vel ornare lorem.
                    Vivamus mi mi, vestibulum nec eleifend eu, lobortis ac
                    neque. Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Sed hendrerit augue dui, non rutrum enim ultrices vel.
                    Fusce mattis ullamcorper nisl, sit amet venenatis odio
                    tincidunt eget.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold dark:text-white">
                    Usage of Information
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
