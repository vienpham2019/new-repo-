import jsPDF from "jspdf";
import portfolioState from "../service/state/portfolioState";

let x = 15;
let text;
let full_x = 0;
let resume_h = 25;
let space = 4; // space between section
let lMargin = 15; //left margin in mm
let rMargin = 15; //right margin in mm
let pdfInMM = 210; // width of A4 in mm

let secondaryColor = [31, 93, 187];

let {
  phone,
  location,
  links,
  aboutMe,
  skills,
  projects,
  experienceLists,
  educations,
} = portfolioState;

const downloadResume = () => {
  let doc = new jsPDF({ lineHeight: 1.5 });
  full_x = doc.internal.pageSize.getWidth() - x;
  pdfInMM = full_x;

  doc.setFontSize("24");
  doc.setFont(undefined, "bold");
  doc.text("PHAM", doc.getTextWidth("VIEN") + 2 + x, resume_h);

  doc.setTextColor(...secondaryColor);
  doc.text("VIEN", x, resume_h);

  doc.setTextColor(0);
  doc.setFontSize("11");
  doc.setFont(undefined, "normal");

  text = `${location} | ${phone}`;
  doc.text(text, full_x - doc.getTextWidth(text), resume_h);

  resume_h += doc.getTextDimensions("VIEN").h + space;
  doc.setFontSize("12");
  doc.setFont(undefined, "normal");
  doc.text("Software Engineer", x, resume_h);

  //links
  text = links.map((l) => l[1]).join("|");
  let link_x = full_x - doc.getTextWidth(text);
  links.forEach((l) => {
    doc.setDrawColor(...secondaryColor);
    doc.setTextColor(...secondaryColor);
    doc.setFontSize("11");
    doc.textWithLink(l[1], link_x, resume_h, { url: l[2] });
    let width = doc.getTextWidth(l[1]);
    link_x += width + 1;
    doc.line(link_x - width - 1, resume_h + 1, link_x - 1, resume_h + 1);

    if (l[1] !== links[links.length - 1][1]) {
      doc.setTextColor(0);
      doc.text("|", link_x, resume_h);
      let vertical_bar_w = doc.getTextWidth("|");
      link_x += vertical_bar_w + 1;
    }
  });

  resume_h += doc.getTextDimensions("Software Engineer").h + space;

  // about
  doc.setFontSize("10");
  doc.setTextColor(0);
  var about_lines = doc.splitTextToSize(aboutMe, pdfInMM - lMargin - rMargin);
  doc.text(about_lines, x, resume_h, {
    maxWidth: full_x - x,
    align: "justify",
  });

  resume_h += doc.getTextDimensions(about_lines).h + space;

  // Technical Skills
  resume_h = resume_header(doc, "TECHNICAL SKILLS", x, resume_h);

  doc.setFont(undefined, "normal");
  doc.setFontSize("10");
  let skill_lines = doc.splitTextToSize(
    skills.join(", "),
    pdfInMM - lMargin - rMargin
  );
  doc.text(skill_lines, x, resume_h, {
    maxWidth: full_x - x,
    align: "justify",
  });

  resume_h += doc.getTextDimensions(skill_lines).h + space;

  // Technical Project
  resume_h = resume_header(doc, "TECHNICAL PROJECTS", x, resume_h);

  // Projects
  //   const projects = projects.slice(0, 3);

  projects.slice(0, 3).forEach((project) => {
    let project_w = x;
    let { title, about, projectDetails, projectLinks } = project;
    doc.setFont(undefined, "bold");
    doc.setFontSize("10");

    doc.text(title, project_w, resume_h);
    let project_title_dimentions = doc.getTextDimensions(title);
    project_w += project_title_dimentions.w;
    doc.setFont(undefined, "normal");

    doc.text(" - ", project_w, resume_h);
    project_w += doc.getTextWidth(" - ") + 1;

    projectLinks.forEach((l, i) => {
      doc.setTextColor(...secondaryColor);
      doc.textWithLink(l.title, project_w, resume_h, { url: l.link });
      let project_github_w = doc.getTextWidth(l.title);
      project_w += project_github_w + 1;

      if (i !== 1) {
        doc.setTextColor(0);
        doc.text("|", project_w, resume_h);
        project_w += doc.getTextWidth("|") + 1;
      }
    });

    resume_h += project_title_dimentions.h++;

    doc.setTextColor(0);
    doc.setFont(undefined, "italic");
    doc.text(about, x, resume_h + 1);
    resume_h += doc.getTextDimensions(about).h + 3;

    doc.setFont(undefined, "normal");
    resume_h = resume_list(doc, projectDetails, x, resume_h) + 2;
  });

  // Work Experience
  resume_h = resume_header(doc, "WORK EXPERIENCE", x, resume_h);

  experienceLists.forEach((work) => {
    let { title, date, location, company, jobDetails } = work;
    doc.setFont(undefined, "bold");
    doc.setFontSize("10");
    doc.text(title, x, resume_h);
    let work_experience_title_dimentions = doc.getTextDimensions(title);
    doc.setFont(undefined, "normal");
    doc.text(`, ${location}`, x + work_experience_title_dimentions.w, resume_h);
    doc.text(date, full_x - doc.getTextWidth(date), resume_h);

    resume_h += work_experience_title_dimentions.h + 2;

    doc.text(company, x, resume_h);
    resume_h += doc.getTextDimensions(company).h + 2;

    resume_h = resume_list(doc, jobDetails, x, resume_h) + 2;
  });

  // Education
  resume_h = resume_header(doc, "EDUCATION", x, resume_h);

  educations.forEach((education) => {
    let { title, date, location, description } = education;
    doc.setFont(undefined, "bold");
    doc.setFontSize("10");
    doc.text(title, x, resume_h);
    let education_title_dimentions = doc.getTextDimensions(title);
    doc.setFont(undefined, "normal");
    doc.text(`, ${location}`, x + education_title_dimentions.w, resume_h);
    doc.text(date, full_x - doc.getTextWidth(date), resume_h);
    resume_h += education_title_dimentions.h + 1;
    doc.text(description, x, resume_h);
    resume_h += doc.getTextDimensions(description).h + 3;
  });

  doc.output("dataurlnewwindow");
  //   doc.save("Vien_Pham_Resume.pdf");
};

const resume_header = (doc, title, x, resume_h) => {
  doc.setFontSize("11");
  doc.setFont(undefined, "bold");
  doc.setLineWidth(2.0);
  doc.setDrawColor(196, 196, 196);
  doc.text(title, x, resume_h);
  resume_h += doc.getTextDimensions(title).h;
  doc.line(x, resume_h, full_x, resume_h);
  resume_h += 7;
  return resume_h;
};

const resume_list = (doc, lists, x, resume_h) => {
  // dot = \u2022
  lists.forEach((list) => {
    let list_x = x;
    doc.setFont(undefined, "bold");
    doc.setFontSize("14");
    doc.text("\u2022 ", list_x, resume_h);
    list_x += doc.getTextWidth("\u2022 ");
    doc.setFont(undefined, "normal");
    doc.setFontSize("10");
    doc.text(list, list_x, resume_h, {
      maxWidth: full_x - list_x,
      align: "justify",
    });
    let lineHeight = doc.splitTextToSize(list, pdfInMM - lMargin - rMargin);
    resume_h += doc.getTextDimensions(lineHeight).h + 1.5;
  });
  return resume_h;
};

export default downloadResume;
