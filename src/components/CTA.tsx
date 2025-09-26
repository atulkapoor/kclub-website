// // HeroSection.jsx
// import React from 'react';

// const HeroSection = ({
//   // bgColor = 'bg-gradient-to-r from-blue-600 to-purple-700',
//   bgColor = 'bg-blue-700',
//   title = "Ready to Scale Faster with Industry-Driven Innovation?",
//   description = "Partner with KCluRs experts to design, build, and implement technology solutions that accelerate growth and drive measurable impact.",
//   primaryButtonText = "See Case Studies",
//   secondaryButtonText = "Contact us"
// }) => {
//   return (
//     <section className={`h-54 items-center mx-auto justify-center py-12 px-4 rounded-sm sm:px-6 lg:px-8 ${bgColor} text-white`}>
//       <div className=''>
//       <h1 className="text-2xl font-bold mb-6 leading-tight">
//           {title}
//         </h1>
//       </div>
//           <div className="mx-auto flex justify-between">
//               <div className='w-[50%]'>
//                   <p className="mb-10 text-xs mx-auto leading-relaxed">
//           {description}
//         </p>
//               </div>
//         <div className="flex w-[50%]  items-start justify-end ">
//         <button className="ml-5 bg-white text-black px-12 py-2 rounded-2xl">
//           {/* <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold transition duration-300 transform hover:scale-105"> */}
//             {primaryButtonText}
//           </button>
//           <button className="ml-5 bg-white text-black px-12 py-2 rounded-2xl">
//             {secondaryButtonText}
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

// HeroSection.jsx
import React from 'react'; 

interface ComponentStyles {
  backgroundColor?: string;
  color?: string;
  padding?: string;
  margin?: string;
  border?: string;
  fontSize?: string;
  backgroundImage?: string;
  width?: string;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

interface HeroSectionStyles {
  container?: ComponentStyles;
  title?: ComponentStyles;
  description?: ComponentStyles;
  buttonsContainer?: ComponentStyles;
  primaryButton?: ComponentStyles;
  secondaryButton?: ComponentStyles;
}

interface HeroSectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showTitle?: boolean;
  showDescription?: boolean;
  showPrimaryButton?: boolean;
  showSecondaryButton?: boolean;
  styles?: HeroSectionStyles;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
  title = "Ready to Scale Faster with Industry-Driven Innovation?",
  description = "Partner with KCluRs experts to design, build, and implement technology solutions that accelerate growth and drive measurable impact.",
  primaryButtonText = "See Case Studies",
  secondaryButtonText = "Contact us",
  showTitle = true,
  showDescription = true,
  showPrimaryButton = true,
  showSecondaryButton = true,
  styles = {}
}) => {
  // Safe destructuring
  const {
    container = {},
    title: titleStyles = {},
    description: descriptionStyles = {},
    buttonsContainer = {},
    primaryButton = {},
    secondaryButton = {}
  } = styles;

  return (
    <section 
      className="bg-blue-700 text-black"
      style={{
        backgroundColor: container.backgroundColor,
        backgroundImage: container.backgroundImage,
        padding: container.padding, 
        backgroundSize: "cover", 
        ...container.style
      }}
    >
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Title with customizable styles */}
        {showTitle && (
          <div 
            className="rounded-lg mb-6"
            style={{
              backgroundColor: titleStyles.backgroundColor,
              padding: titleStyles.padding,
              margin: titleStyles.margin,
              ...titleStyles.style
            }}
          >
            <h1 
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center lg:text-left"
              style={{
                color: titleStyles.color,
                fontSize: titleStyles.fontSize,
                ...titleStyles.textStyle
              }}
            >
              {title}
            </h1>
          </div>
        )}
        
        {/* Buttons container with customizable styles */}
        {(showPrimaryButton || showSecondaryButton) && (
          <div 
            className="rounded-lg flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-8"
            style={{
              backgroundColor: buttonsContainer.backgroundColor,
              padding: buttonsContainer.padding,
              margin: buttonsContainer.margin,
              ...buttonsContainer.style
            }}
          >
            {showDescription && (
              <div 
                className="rounded-lg w-full lg:w-1/2 mx-auto"
                style={{
                  backgroundColor: descriptionStyles.backgroundColor,
                  padding: descriptionStyles.padding,
                  margin: descriptionStyles.margin,
                  width: descriptionStyles.width,
                  ...descriptionStyles.style
                }}
              >
                <p 
                  className="text-lg sm:text-xl lg:text-xl text-white text-center lg:text-left leading-relaxed"
                  style={{
                    color: descriptionStyles.color,
                    fontSize: descriptionStyles.fontSize,
                    ...descriptionStyles.textStyle
                  }}
                >
                  {description}
                </p>
              </div>
            )}
            
            <div className="w-full lg:w-1/2 flex flex-col sm:flex-row justify-center lg:justify-end gap-4 sm:gap-6 lg:gap-8">
              {/* Primary button with customizable styles */}
              {showPrimaryButton && (
                <button 
                  className="py-3 px-6 sm:py-4 sm:px-8 lg:py-8 lg:px-3 rounded-3xl text-black bg-white w-full sm:w-auto text-base sm:text-lg lg:text-base font-medium transition-transform hover:scale-105"
                  style={{
                    backgroundColor: primaryButton.backgroundColor,
                    color: primaryButton.color,
                    padding: primaryButton.padding || '12px 32px',
                    border: primaryButton.border,
                    fontSize: primaryButton.fontSize,
                    ...primaryButton.style
                  }}
                >
                  {primaryButtonText}
                </button>
              )}
              
              {/* Secondary button with customizable styles */}
              {showSecondaryButton && (
                <button 
                  className="py-3 px-6 sm:py-4 sm:px-8 lg:py-8 lg:px-3 rounded-3xl bg-white text-black w-full sm:w-auto text-base sm:text-lg lg:text-base font-medium transition-transform hover:scale-105"
                  style={{
                    backgroundColor: secondaryButton.backgroundColor,
                    color: secondaryButton.color,
                    padding: secondaryButton.padding || '12px 32px',
                    border: secondaryButton.border,
                    fontSize: secondaryButton.fontSize,
                    ...secondaryButton.style
                  }}
                >
                  {secondaryButtonText}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;