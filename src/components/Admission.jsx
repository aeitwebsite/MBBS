"use client";

export default function AboutSection() {
  return (
    <section className="w-full min-h-screen px-6 py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto space-y-8">


        
        
        {/* Admissions Card */}
        <div className="bg-white rounded-xl shadow p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-4">
            Admissions
          </h1>

          <p className="text-gray-700 leading-relaxed mb-6">
            Admissions at <strong>AIMSRC</strong> are conducted strictly based on 
            <strong> NEET-UG merit</strong> in line with NMC and Government of India guidelines.
          </p>

          <h2 className="text-xl font-semibold text-blue-800 mb-3">
          How to Apply
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Register through official counselling portals as per government notification</li>
            <li>Select <strong>Alva’s Institute of Medical Sciences and Research Centre</strong> during counselling</li>
            <li>Submit required documents for verification</li>
            <li>
              For queries: <br />
              <strong>08258-236821 to 238111 (8 lines)</strong><br />
              <strong>Ph:</strong> 9945449784<br />
              <strong>Email:</strong> office@aimsarc.org
            </li>
          </ul>
        </div>

        {/* Eligibility Card (Separate like menu item) */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Eligibility
          </h2>

          <p className="text-gray-700 leading-relaxed">
            A pass in 12th Standard or equivalent examination approved by 
            Rajiv Gandhi University of Health Sciences, Bangalore with 
            Physics, Chemistry and Biology as optional subjects and English 
            as one of the languages of study, with at least <strong>50% marks</strong> 
            in aggregate. The candidate should have completed <strong>17 years</strong> 
            of age as on 31st December of the year of admission.
          </p>
        </div>

        {/* Documents Card */}
        <div className="bg-white rounded-xl shadow p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">
            Documents Required
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>12th standard marks card / pass certificate (Original + 3 copies)</li>
            <li>10th standard certificate for DOB proof (Original + 3 copies)</li>
            <li>Transfer Certificate (Original + 3 copies)</li>
            <li>Conduct Certificate (Original)</li>
            <li>Eligibility Certificate from RGUHS, Bangalore</li>
            <li>Migration Certificate</li>
            <li>Valid Passport and Student VISA</li>
            <li>Proof of employment abroad of parent (if applicable)</li>
            <li>Physical Fitness Certificate</li>
            <li>Blood Group Certificate</li>
            <li>Recent Passport Size Photographs</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
