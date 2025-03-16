"use client"

import { useState } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Briefcase, ArrowUpRight, Lightbulb, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"

export default function WorkRecommendationsPage() {
  const searchParams = useSearchParams()
  const level = searchParams.get("level") || "10th"
  const [activeTab, setActiveTab] = useState("jobs")

  // Job recommendations based on education level
  const jobRecommendations = {
    "10th": [
      { title: "Data Entry Operator", salary: "₹12,000 - ₹18,000", location: "Remote/Office" },
      { title: "Retail Sales Associate", salary: "₹15,000 - ₹20,000", location: "In-store" },
      { title: "Customer Service Representative", salary: "₹15,000 - ₹25,000", location: "Call Center" },
      { title: "Office Assistant", salary: "₹12,000 - ₹20,000", location: "Office" },
    ],
    "12th": [
      { title: "Bank Clerk", salary: "₹25,000 - ₹35,000", location: "Bank Branch" },
      { title: "Junior Administrative Assistant", salary: "₹18,000 - ₹28,000", location: "Office" },
      { title: "BPO Executive", salary: "₹20,000 - ₹30,000", location: "Call Center" },
      { title: "Sales Executive", salary: "₹15,000 - ₹35,000 + Incentives", location: "Field/Office" },
    ],
    unskilled: [
      { title: "Delivery Partner", salary: "₹15,000 - ₹25,000", location: "Field" },
      { title: "Security Guard", salary: "₹12,000 - ₹18,000", location: "Various Locations" },
      { title: "Factory Worker", salary: "₹12,000 - ₹20,000", location: "Factory" },
      { title: "Housekeeping Staff", salary: "₹10,000 - ₹15,000", location: "Hotels/Offices" },
    ],
  }

  // Skill upgrade recommendations
  const skillRecommendations = [
    {
      title: "Computer Skills",
      duration: "3-6 months",
      description: "Learn basic to advanced computer operations, MS Office, and typing skills.",
      levels: ["Beginner: Basic Computer Operations", "Intermediate: MS Office Suite", "Advanced: Data Analysis"],
    },
    {
      title: "Digital Marketing",
      duration: "2-4 months",
      description: "Learn social media marketing, SEO, and content creation.",
      levels: ["Beginner: Social Media Basics", "Intermediate: SEO & Analytics", "Advanced: Campaign Management"],
    },
    {
      title: "Technical Skills",
      duration: "6-12 months",
      description: "Learn electrical, plumbing, or carpentry skills for trade jobs.",
      levels: [
        "Beginner: Safety & Basic Tools",
        "Intermediate: Repairs & Maintenance",
        "Advanced: Installation & Troubleshooting",
      ],
    },
    {
      title: "Language Skills",
      duration: "3-6 months",
      description: "Improve English communication for better job prospects.",
      levels: [
        "Beginner: Basic Communication",
        "Intermediate: Fluent Conversation",
        "Advanced: Business Communication",
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar/>

      <main className="flex-1 p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <Link href="/career-path/work" className="text-primary hover:underline inline-flex items-center">
                <ChevronRight className="h-4 w-4 mr-1 rotate-180" />
                Back to Education Levels
              </Link>

              <div className="space-y-2 mt-4">
                <h1 className="text-3xl font-bold">Career Recommendations</h1>
                <p className="text-muted-foreground">
                  Based on your {level === "10th" ? "10th Pass" : level === "12th" ? "12th Pass" : "Unskilled Worker"}{" "}
                  qualification
                </p>
              </div>
            </div>

            <Tabs defaultValue="jobs" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="jobs">Available Jobs</TabsTrigger>
                <TabsTrigger value="skills">Upgrade Skills</TabsTrigger>
              </TabsList>

              <TabsContent value="jobs" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {jobRecommendations[level as keyof typeof jobRecommendations].map((job, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-xl">{job.title}</CardTitle>
                            <CardDescription className="mt-1">{job.location}</CardDescription>
                          </div>
                          <div className="p-2 rounded-full bg-primary/10">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Salary Range:</span>
                            <span className="font-medium">{job.salary}/month</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Qualification:</span>
                            <span className="font-medium">
                              {level === "10th" ? "10th Pass" : level === "12th" ? "12th Pass" : "No Formal Education"}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full group">
                          Apply Now
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 rounded-full bg-primary/10 mt-1">
                      <Lightbulb className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">Want better job opportunities?</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Upgrade your skills to qualify for higher-paying jobs. Check out our skill-building programs.
                      </p>
                      <Button variant="link" className="p-0 h-auto mt-2" onClick={() => setActiveTab("skills")}>
                        View Skill Programs
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="skills" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {skillRecommendations.map((skill, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle>{skill.title}</CardTitle>
                        <CardDescription>Duration: {skill.duration}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-sm">{skill.description}</p>

                        <div className="space-y-3">
                          <h4 className="text-sm font-medium">Skill Roadmap:</h4>
                          <div className="space-y-3">
                            {skill.levels.map((level, idx) => (
                              <div key={idx} className="flex items-center">
                                <div
                                  className={`w-2 h-2 rounded-full mr-2 ${idx === 0 ? "bg-green-500" : idx === 1 ? "bg-yellow-500" : "bg-red-500"}`}
                                ></div>
                                <span className="text-sm">{level}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full group">
                          Enroll Now
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}

