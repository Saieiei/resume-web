import { Helmet } from "react-helmet-async";
import { Mail, Phone, Github, Linkedin, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";

const Resume = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!window.matchMedia) return; // Guard for environments without matchMedia
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return; // Respect reduced motion

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--x", `${x}%`);
      el.style.setProperty("--y", `${y}%`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const canonical = typeof window !== "undefined" ? `${window.location.origin}/resume` : "";

  const personLD = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sairudra More",
    email: "mailto:sairudra60@gmail.com",
    telephone: "+91-8618300809",
    url: canonical || "",
    sameAs: [
      "https://github.com/Saieiei",
      "https://www.linkedin.com/in/sairudra-more",
      "https://leetcode.com/u/saiei/"
    ],
    jobTitle: "Cray C/C++ Compiler Frontend Software Developer",
    worksFor: {
      "@type": "Organization",
      name: "Hewlett Packard Enterprise"
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Vellore Institute of Technology – Chennai (VIT)",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Chennai",
          addressCountry: "India"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Helmet>
        <title>Sairudra More — Resume</title>
        <meta name="description" content="Resume of Sairudra More: C/C++, Compiler Frontend, HPC, PHP, MySQL, and research in data compression." />
        {canonical && <link rel="canonical" href={canonical} />}
        <script type="application/ld+json">{JSON.stringify(personLD)}</script>
      </Helmet>

      <header className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-0 ambient-bg" />
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Sairudra More
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
              <a href="mailto:sairudra60@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground transition-colors" aria-label="Email">
                <Mail className="size-4" />
                <span>sairudra60@gmail.com</span>
              </a>
              <a href="tel:+918618300809" className="inline-flex items-center gap-2 hover:text-foreground transition-colors" aria-label="Phone">
                <Phone className="size-4" />
                <span>+91-8618300809</span>
              </a>
              <a href="https://github.com/Saieiei" target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="size-4" />
                <span>github.com/Saieiei</span>
              </a>
              <a href="https://www.linkedin.com/in/sairudra-more" target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="size-4" />
                <span>linkedin.com/in/sairudra-more</span>
              </a>
              <a href="https://leetcode.com/u/saiei/" target="_blank" rel="noopener" className="inline-flex items-center gap-2 hover:text-foreground transition-colors" aria-label="LeetCode">
                <Code className="size-4" />
                <span>leetcode.com/u/saiei/</span>
              </a>
            </div>
            <nav className="pt-2 -mb-1 overflow-x-auto" aria-label="Quick section navigation">
              <div className="flex items-center gap-2 min-w-max">
                <Button asChild variant="outline" size="sm"><a href="#education">Education</a></Button>
                <Button asChild variant="outline" size="sm"><a href="#skills">Skills</a></Button>
                <Button asChild variant="outline" size="sm"><a href="#work-experience">Experience</a></Button>
                <Button asChild variant="outline" size="sm"><a href="#projects">Projects</a></Button>
                <Button asChild variant="outline" size="sm"><a href="#awards">Awards</a></Button>
                <Button asChild variant="outline" size="sm"><a href="#achievements">Achievements</a></Button>
                <Button asChild variant="outline" size="sm"><a href="#personal">Personal</a></Button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-16">
        <section aria-labelledby="education" className="py-8">
          <h2 id="education" className="text-2xl font-semibold mb-4 text-foreground">
            Education
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Vellore Institute of Technology – Chennai (VIT), India</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>2021 – 2025</p>
                <p>B. Tech CSE Core | CGPA: 8.90</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Sri Chaitanya PU College – Bengaluru, India</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>2019 – 2021</p>
                <p>CBSE (Class XII), Aggregate: 91%</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>St. Thomas Public School – Bengaluru, India</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>2018 – 2019</p>
                <p>ICSE (Class X), Aggregate: 93.5%</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="skills" className="py-8">
          <h2 id="skills" className="text-2xl font-semibold mb-4 text-foreground">Skills</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="flex flex-wrap gap-2 text-sm text-foreground/90">
                {[
                  "C++",
                  "C",
                  "Java",
                  "Python",
                  "MySQL",
                  "PHP",
                  "Postman API",
                ].map((skill) => (
                  <li key={skill} className="rounded-md border px-3 py-1 bg-secondary text-secondary-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="work-experience" id="work-experience" className="py-8">
          <h2 className="text-2xl font-semibold mb-4 text-foreground">Work Experience</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Hewlett Packard Enterprise — Cray C/C++ Compiler Frontend Software Developer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Feb 2025 – Present</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Design, develop, and optimize compiler frontend components for Cray supercomputers.</li>
                  <li>Enhance parsing, semantic analysis, and code transformations to ensure efficient, high-performance execution for HPC workloads.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Cuvasol Technologies Private Limited — Trainee Software Developer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Aug 2023 – Sep 2023</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Implemented a video recording feature using PHP and APIs, improving system efficiency by 20%.</li>
                  <li>Integrated Postman for seamless API testing, reducing testing time by 30%.</li>
                  <li>Strengthened skills in PHP, data security, and performance optimization in dynamic environments.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="projects" className="py-8">
          <h2 id="projects" className="text-2xl font-semibold mb-4 text-foreground">Projects / Research</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Publication 1— IEEE INCIP 2025 (Manipal Institute of Technology)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>2025</p>
                <p>
                  Presented: "Enhancing Data Compression Techniques for Optimization: A Novel Integration of Burrows-Wheeler Transform, Lempel-Ziv-Welch, Run-Length Encoding, and Huffman Coding" at IEEE INCIP-2025, Manipal Institute of Technology.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Delivered 95%+ lossless size reduction (Compression Factor up to 21.35x with BWT+HC+RLE; 20.69x with BWT+LZW+HC) across evaluated datasets.</li>
                  <li>Cut storage and bandwidth needs by ~95%, enabling faster transmission in IoT and image pipelines while preserving exact reconstruction.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Publication 2 — ICRAMDS 2024 (NIT Bhopal)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Jul 2024</p>
                <p>
                  Research: "Enhancing Data Compression Techniques for Optimization: A Novel Integration of BWT, LZW, RLE, and Huffman Coding".
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Achieved an average 26% improvement in compression ratios across diverse datasets.</li>
                  <li>35% acceleration in encoding/decoding via integrated BWT + LZW + RLE + Huffman pipeline.</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Publication 3 — IEEE ICACRS 2023 (Mount Zion College of Engineering and Technology)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>Jan 2023</p>
                <p>
                  Research: "Enhancing Data Compression: A Dynamic Programming Approach with Huffman Coding and Burrows-Wheeler Transform".
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Improved compression ratios by 21% across multiple image types.</li>
                  <li>30% speedup in encoding/decoding with dynamic programming optimizations.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section aria-labelledby="awards" className="py-8">
          <h2 id="awards" className="text-2xl font-semibold mb-4 text-foreground">Awards and Certifications</h2>
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Microsoft Learn Student Ambassador (MLSA) – BETA</li>
                <li>Microsoft Certified: Azure AI Engineer Associate</li>
                <li>Microsoft Certified: Azure Administrator Associate</li>
                <li>Microsoft Certified: Azure Fundamentals</li>
                <li>Microsoft Certified: Azure AI Fundamentals</li>
                <li>Microsoft Certified: Azure Data Fundamentals</li>
                <li>AWS Certified: Cloud Practitioner</li>
                <li>Cisco Verified: Introduction to Packet Tracer</li>
                <li>IIT Bombay Certified: Python 3.4.3; C and Cpp; Advanced Cpp; Java; PHP and MySQL Training</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="achievements" className="py-8">
          <h2 id="achievements" className="text-2xl font-semibold mb-4 text-foreground">Academic & Extracurricular</h2>
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-1">
                <li>Finalist in HACKOVERFLOW hackathon (CYSCOM, VIT).</li>
                <li>Competitive Programmer and videographer at multiple university clubs.</li>
                <li>Google Cloud Skills Boost participant with goodies received.</li>
                <li>Top 3 NPTEL certification exams with 100% score and Gold medal status.</li>
                <li>Black Belt in Kyokushin martial art.</li>
                <li>Won athletics events: throw ball, 100m, 200m, and rally for school house.</li>
                <li>Completed 2023 Web Dev Bootcamp.</li>
                <li>Football Team Captain at school level.</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section aria-labelledby="personal" className="py-8">
          <h2 id="personal" className="text-2xl font-semibold mb-4 text-foreground">Personal Information</h2>
          <Card>
            <CardContent className="pt-6 text-sm text-muted-foreground">
              <p><span className="font-medium text-foreground">Languages:</span> English, Hindi, Telugu, Tamil, Kannada</p>
              <p className="mt-2"><span className="font-medium text-foreground">Interests:</span> Football, Athletics, Graphic Designing, Martial Arts</p>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default Resume;
