import React from 'react'
import ExperiencesCard from '@/components/ExperiencesCard/ExperiencesCard';


const page = () => {
  return (
    <div className="min-h-screen flex justify-center items-start">
      <section className="w-2/3 p-10">
              <div className="flex justify-around mb-4 text-xl font-semibold text-white mt-10">
                <div className="flex items-center gap-2">
                  🎓 <span>EDUCATION</span>
                </div>
                <div className="flex items-center gap-2">
                  💼 <span>EMPLOYMENT</span>
                </div>
              </div>
              <ExperiencesCard />
      </section>

    </div>

    
  );
}

export default page