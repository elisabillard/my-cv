export const cvData = {
  name: "Elisa Billard",
  email: "elisabillard1905@gmail.com",
  linkedin: "https://www.linkedin.com/in/elisa-billard-613680206/",
  github: "https://github.com/elisabillard",
  tagline: "Biological Data Science | Master Student at EPFL",
  currentRole: "Research Student in Pietro Lio’s Computer Lab, Cambridge University",
  thesis: "Deep learning for cancer diagnosis using spectral pathology (Infra-Red & Raman). Developing CycleGAN-based and U-Net virtual staining models to generate reliable histopathological (H&E) images. Supervised by Prof. Pietro Liò and Prof. Charlotte Bunne (EPFL). Honoured by the Karl Zeno Schindler Foundation Grant.",
  
  experience: [
    { title: "Computational Biology Intern", company: "Orakl Oncology", logo: "/logos/orakloncology_logo.jpeg", location: "Paris, FR", date: "Feb 2025 - July 2025", desc: "Analyzed 150+ patient-derived organoids and improved biomarker identification pipeline (driver mutations, transcriptomic signatures) using WES and RNA-seq data." },
    { title: "Research Student", company: "Bitbol Lab, EPFL", logo: "/logos/epfl.png", location: "Lausanne, CH", date: "Sept 2024 - Jan 2025", desc: "Fine-tuning ProtMamba protein language model for functionality prediction.", report: "ProtMamba_Finetuning_Elisa_Billard.pdf"},
    { title: "Research Student", company: "Schwarz Lab, ICCB", logo: "/logos/ICCB_logo_header.png", location: "Cologne, DE", date: "March 2023 - July 2023", desc: "Cancer evolution research; automated detection of clones in phylogenetic trees.", link: "https://www.biorxiv.org/content/10.64898/2025.12.11.693738v1.article-info" },
    { title: "Clinical Trial Intern", company: "AstraZeneca", logo: "/logos/AZN.png", location: "Hamburg, DE", date: "Sept 2022 - Jan 2023", desc: "Clinical trial challenge identification in Oncology Site Management." },
    { title: "Research Student", company: "Van der Goot Lab, EPFL", logo: "/logos/epfl.png", location: "Lausanne, CH", date: "Feb 2022", desc: "Wet lab research on TMED2/TMED10 proteins in ER-Golgi communication." }
  ],
  education: [
    { 
    school: "EPFL", 
    degree: "Master in Life Science Engineering", 
    logo: "/logos/epfl.png",  
    date: "2023 - 2025", 
    gpa: "5.5/6",
    specialization: "Specialised in Biological Data Science",
    computational: ["Machine Learning (5/6)", "Applied Data Analysis (5.75/6)", "Digital Epidemiology", "Bioimage Informatics", "Biostatistics", "Genomics"],
    biology: ["Stem Cells", "Infection Biology", "Neurodegenerative Diseases", "Endocrinology"]
  },
  { 
    school: "EPFL", 
    degree: "Bachelor in Life Science Engineering", 
    logo: "/logos/epfl.png", 
    date: "2019 - 2022", 
    gpa: "5.1/6",
    computational: ["Computer science", "Physics", "Algebra", "Statistics & Probability", "Machine Learning"],
    biology: ["Synthetic Biology", "Immuno-engineering", "Oncology", "Neuroscience", "Genetics & Genomics", "Physiology"]
  },
  { 
    school: "LFZ", 
    degree: "French Scientific Baccalaureate", 
    logo: "/logos/lfz.webp", 
    date: "2016 - 2019", 
    gpa: "20/20" 
  }  ],
papers: [
    { 
      title: "PhytClust: efficient and optimal node clustering in phylogenetic trees", 
      authors: "Ganesan, K., Billard, E., Kaufmann, T. L., Strange, C. B., Cwikla, M. C., Altenhoff, A., Dessimoz, C., & Schwarz, R. F.", 
      year: "2025", 
      note: "Threshold-free algorithm that partitions taxa in phylogenetic trees into monophyletic clusters.",
      link: "https://www.biorxiv.org/content/10.64898/2025.12.11.693738v1.article-info"
    },
    { 
      title: "Karl Zeno Schindler Foundation Research Grant", 
      year: "2025", 
      note: "12k CHF to finance my research project on deep learning for Raman spectral pathology in the University of Cambridge, under supervision of Prof. Pietro Liò - Cambridge University and Prof. Charlotte Bunne - EPFL", 
    }
  ],
  projects: [
    { name: "Binder Protein Design Targeting PDGFR β", tools: "RFdiffusion, ProteinMPNN, AlphaFold", report: "Protein_design_project.pdf" },
    { name: "Image Based Cell Cycle Classification", tools: "CNN, Data Augementation, Transfer Learning", report: "ML_Project_2.pdf"},
    { name: "Gender Stereotypes in Movies", tools: "NLP, Clustering, Sentiment Analysis", link: "https://elisabillard.github.io/" },
    { name: "Pollen Surveillance Digital Epidemiology Website", tools: "Streamlit, EpiCollect, Google API", report: "PollenPal_Report.pdf"},
    { name: "Hospital Patient Record Uniformization", tools: "Google Hackathon, Gemma" },

  ],
  skills: {
    programming: ["Python", "PyTorch", "R", "C++", "Julia", "Java", "Git", "Docker"],
    languages: ["French Native", "German C1", "English C1", "Spanish B1"]
  }
};