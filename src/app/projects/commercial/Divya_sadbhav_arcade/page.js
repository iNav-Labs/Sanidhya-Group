import ProjectCard from "@/components/ProjectCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const DivyaSadbhavArcade = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <ProjectCard
          title="Divya Sadbhav Arcade"
          description="A peaceful residential community."
          banner="/image1.jpeg"
          location="Surat, India"
          year="2023"
          about_text="Welcome to a sophisticated, metropolitan lifestyle within a vibrant community on the cusp of an urban and serene backdrop. Shilp Serene is a collection of two and three-bedroom stunning homes, offering an"
          about_text_2="unbeatable combination of metropolitan sophistication and a serene lifestyle. The project is located in the heart of Surat, offering a range of amenities and facilities to make your life comfortable and convenient."
          side_image="/image1.jpeg"
          image1="/image1.jpeg"
          image2="/image1.jpeg"
          image3="/image1.jpeg"
          image4="/image1.jpeg"
          image5="/image1.jpeg"
          // Dynamic Location Props
          address={{
            name: "Shilp Serene",
            details: "Shilaj, Ahmedabad, Gujarat 380059, India",
          }}
          phoneNumbers={["+91 74358 11123", "+91 70696 13123"]}
          emails={["sales@shilp.co.in", "saumil@shilp.co.in"]}
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.7822031918887!2d72.4824628752405!3d23.210692610749494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8333a056cfab%3A0xd3488d2a0a1e1b89!2sShilp%20Serene!5e0!3m2!1sen!2sin!4v1709020000000!5m2!1sen!2sin"
        />
      </div>
      <Footer />
    </>
  );
};

export default DivyaSadbhavArcade;
