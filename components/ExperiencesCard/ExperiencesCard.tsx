import React from 'react'

const ExperiencesCard = () => {
    return (
        <div className="relative flex justify-center">
          {/* Ligne centrale */}
          <div className="absolute w-1 bg-blue-500 h-full left-1/2 transform -translate-x-1/2" />
      
          <div className="space-y-12 w-full max-w-4xl px-4">
            {/* Éducation  */}
            <div className="relative w-1/2 pr-8 text-right">
              <div className="absolute right-[-0.5rem] top-1.5 w-4 h-4 bg-blue-500 rounded-full z-10" />
              <p className="text-sm text-gray-300">December 2024 – now</p>
              <h3 className="font-semibold text-white text-lg">M1 à l&rsquo;ITUniversity</h3>
            </div>

            <div className="relative w-1/2 pl-8 ml-auto text-left">
              <div className="absolute left-[-0.5rem] top-1.5 w-4 h-4 bg-blue-500 rounded-full z-10" />
                <p className="text-sm text-gray-300">Febroary 2024 - now</p>
                <p className="text-sm text-gray-300">Développeur web en CDD (Préstataire)</p>
                <h3 className="font-semibold text-white text-lg">Banky Foiben&rsquo;i Madagasikara</h3>
                <p className="text-sm text-gray-300">Conception d&rsquo;un site web pour la vente de pièces en or avec Symfony. Maintenance et optimisation du site administratif WordPress (mise à jour de plugins, correction de bugs). Réalisation de tests UAT et collaboration avec les équipes pour garantir la qualité des livrables.
              </p>
            </div>
      
            {/* Education - Gauche */}
            <div className="relative w-1/2 pr-8 text-right">
              <div className="absolute right-[-0.5rem] top-1.5 w-4 h-4 bg-blue-500 rounded-full z-10" />
              <p className="text-sm text-gray-300">2021 – </p>
              <h3 className="font-semibold text-white text-lg">M1 à l&rsquo;ITUniversity</h3>
            </div>
      
            <div className="relative w-1/2 pl-8 ml-auto text-left">
              <div className="absolute left-[-0.5rem] top-1.5 w-4 h-4 bg-blue-500 rounded-full z-10" />
              <p className="text-sm text-gray-300">November 0000</p>
              <h3 className="font-semibold text-white text-lg">DESIGNER AT BEYELASHES</h3>
              <p className="text-sm text-gray-300">
                This slide is 100% editable. Adapt it to your needs and capture your audience&rsquo;s attention
              </p>
            </div>
          </div>
        </div>
      );
      
      
}

export default ExperiencesCard