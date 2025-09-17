import { type NextRequest, NextResponse } from "next/server"

// Enhanced CV parser that extracts comprehensive information
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Simulate comprehensive CV parsing with AI
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Enhanced parsing results based on the example CV
    const parsedData = {
      personalInfo: {
        name: "Candidate Name",
        title: "Professional Title",
        phone: "+33 X XX XX XX XX",
        email: "candidate@email.com",
        linkedin: "linkedin.com/in/candidate",
        github: "github.com/candidate",
        location: "City, Country",
      },
      professionalProfile: "Professional summary extracted from CV...",
      experience: [
        {
          title: "Current Position",
          company: "Company Name",
          location: "Location",
          period: "Start - End",
          responsibilities: ["Key responsibility 1", "Key responsibility 2", "Key responsibility 3"],
          technologies: ["Tech1", "Tech2", "Tech3"],
          achievements: ["Achievement 1", "Achievement 2"],
        },
      ],
      skills: {
        Development: {
          level: 90,
          experience: "4 years",
          subcategories: {
            "Programming Languages": [
              { name: "JavaScript", level: 95, experience: "4 years" },
              { name: "Python", level: 85, experience: "3 years" },
            ],
            Frameworks: [
              { name: "React", level: 90, experience: "3 years" },
              { name: "Node.js", level: 85, experience: "3 years" },
            ],
          },
        },
        DevOps: {
          level: 75,
          experience: "2 years",
          subcategories: {
            Containerization: [
              { name: "Docker", level: 80, experience: "2 years" },
              { name: "Kubernetes", level: 70, experience: "1 year" },
            ],
          },
        },
      },
      projects: [
        {
          name: "Project Name",
          technologies: ["React", "Node.js", "MongoDB"],
          description: "Project description...",
          achievements: ["Project achievement 1", "Project achievement 2"],
        },
      ],
      languages: [
        { name: "French", level: "Native", proficiency: 100 },
        { name: "English", level: "Fluent (C2)", proficiency: 95 },
        { name: "Spanish", level: "Intermediate (B1)", proficiency: 70 },
      ],
      education: [
        {
          degree: "Master's Degree",
          institution: "University Name",
          location: "Location",
          period: "2020-2022",
          status: "Completed",
        },
      ],
      interests: [
        {
          category: "Technical Creativity",
          description: "Interest description...",
        },
      ],
      contractPreferences: {
        types: ["CDI", "CDD"],
        workModes: ["Remote", "Hybrid", "On-site"],
        salaryRange: "40,000 - 50,000 EUR",
      },
      confidence: 95,
      processingTime: "2.3s",
    }

    return NextResponse.json({
      success: true,
      data: parsedData,
      message: "CV parsed successfully with comprehensive skill extraction",
    })
  } catch (error) {
    console.error("CV parsing error:", error)
    return NextResponse.json({ error: "Failed to parse CV" }, { status: 500 })
  }
}
