import React from "react";
import Carousel from"../components/UI/Carousel";
function About() {
  return (
    <>
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">NlightenU</h1>
      <div className="mb-4">
        <p>
          At NlightenU, we redefine the learning experience while perfecting
          management strategies. Our platform seamlessly integrates innovative
          learning methodologies with efficient management tools, empowering
          individuals and organizations to navigate the complexities of skill
          development and growth. We offer a comprehensive suite of resources,
          enabling effortless learning while streamlining management tasks. Join
          us to unlock your potential, elevate your skills, and embrace a
          transformative journey towards success.
        </p>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">How to use NlightenU</h3>
        <ul className="list-disc pl-6">
          <li>Registration and Profile Creation: Start by creating a user account. Provide necessary details and personalize your profile to get access to the full range of features.</li>
          <li>Explore Learning Resources: Navigate through the website to discover a diverse array of learning materials such as courses, tutorials, e-books, webinars, and more. These resources cater to various subjects or skills relevant to your interests or professional needs.</li>
          <li>Personalized Learning Paths: Utilize the platform's features to create personalized learning paths. Set goals, track progress, and access recommended courses or modules based on your preferences and learning objectives.</li>
          <li>Assessments and Certifications: Take assessments or quizzes to evaluate your understanding of the material. Earn certificates or badges upon completion of courses or milestones, showcasing your achievements.</li>
          <li>Feedback and Improvement: Provide feedback on courses or resources to help improve the platform. Constantly seek ways to enhance your learning journey based on your experiences and recommendations.</li>
        </ul>
      </div>
    </div>
    <Carousel/>
    </>
  );
}

export default About;