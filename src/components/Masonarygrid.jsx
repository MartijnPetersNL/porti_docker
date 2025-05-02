import React from "react";

const images = [
  "/RubyOutfitVariants4.png",
  "/VestDesignPerspectiveVariantsV1.png",
  "/FelixTheCat2DigitalisationV3.png",
  "/halloweenShirt2024.PNG",
  "/project for Corpse_Milk_discord.png",
  "/artReferenceSimplification 1.png",
  "/poseStudySketch2.png",
  "/brabant_bank_logo.jpg",
  "/noordplein_concepten.jpg",
  "/ruby_turan_outfit_try_outs_by_hollandarist18plus_df99k1j.png",
  "/TypografieOntwerpenJuli2021.png",
  "/PointPerspectiveSkyscraperPractise2.png",
  "/LetterArtRCollectionPart3Version2.png",
  "/DarkBlueSimpleDarkTechandGamingBio-LinkWebsite-modified.png",
  "/wijntas-grapeminds.jpg",
  "/wijntas-superheld.jpg",
  "/wijntas-verjaardag-1.jpg",
  "/wijntas-verjaardag-2.jpg",
];
const Masonarygrid = () => {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 py-15 md:py-20 lg:px-25 gap-4">
      {/* break after void prevents collumn breaks */}
      {/* relative and z-index are needed to prevent image overlap*/}
      {images.map((src, index) => (
        <div
          key={index}
          className="mb-3 break-inside-avoid relative hover:z-10"
        >
          <img
            src={src}
            className="w-full object-cover rounded-lg transform transition duration-400 hover:scale-150"
          />
        </div>
      ))}
    </div>
  );
};
export default Masonarygrid;
