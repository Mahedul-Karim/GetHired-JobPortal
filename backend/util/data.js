export const cvTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{headline}} - CV</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Roboto, -apple-system, BlinkMacSystemFont, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f8f9fa;
    }
    
    .cv-container {
      max-width: 900px;
      margin: 20px auto;
      display: grid;
      grid-template-columns: 300px 1fr;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
      background: white;
      border-radius: 10px;
      overflow: hidden;
    }
    
    .left-column {
      background-color: #1a3a53;
      color: white;
      padding: 30px;
    }
    
    .right-column {
      background-color: white;
      padding: 30px;
    }
    
    .profile-container {
      text-align: center;
      margin-bottom: 30px;
    }
    
    .profile-img-container {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 15px;
      border: 5px solid rgba(255, 255, 255, 0.5);
    }
    
    .profile-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .headline {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
      text-align: center;
      margin-top: 10px;
    }
    
    .section-title {
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 600;
      margin: 25px 0 15px;
      padding-bottom: 8px;
      border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    }

    .right-column .section-title {
      color: #1a3a53;
      border-bottom: 2px solid #1a3a53;
    }
    
    .contact-item {
      margin-bottom: 12px;
      font-size: 14px;
    }
    
    .name {
      font-size: 26px;
      font-weight: bold;
      color: #1a3a53;
      margin-bottom: 5px;
      text-align: center;
    }
    
    .job-title {
      text-transform: uppercase;
      font-size: 14px;
      color: #666;
      text-align: center;
      margin-bottom: 20px;
      letter-spacing: 1px;
    }
    
    ul.skills-list, ul.languages-list {
      list-style-type: none;
      padding-left: 0;
    }
    
    ul.skills-list li, ul.languages-list li {
      background: rgba(255, 255, 255, 0.2);
      padding: 6px 10px;
      display: inline-block;
      border-radius: 5px;
      margin: 5px 3px;
      font-size: 14px;
    }
    
    .experience-item, .education-item {
      margin-bottom: 20px;
    }
    
    .edu-degree, .job-position {
      font-weight: bold;
      margin-bottom: 5px;
    }
    
    .edu-school, .job-company {
      font-size: 14px;
      color: #555;
    }
    
    .job-description {
      font-size: 14px;
      color: #666;
      margin-top: 5px;
    }
    
    .profile-text {
      text-align: justify;
      margin-bottom: 25px;
      font-size: 14px;
      color: #666;
    }

    @media (max-width: 768px) {
      .cv-container {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="cv-container">
    <!-- Left Column -->
    <div class="left-column">
      <div class="profile-container">
        <div class="profile-img-container">
          <img src="{{userImage.url}}" alt="Profile Photo" class="profile-img">
        </div>
        <div class="headline">{{headline}}</div>
      </div>
      
      <h3 class="section-title">Contact</h3>
      {{#if phone}}<div class="contact-item">📞 {{phone}}</div>{{/if}}
      {{#if email}}<div class="contact-item">📧 {{email}}</div>{{/if}}
      {{#if address}}<div class="contact-item">📍 {{address}}</div>{{/if}}
      {{#if website}}<div class="contact-item">🌐 {{website}}</div>{{/if}}
      
      <h3 class="section-title">Education</h3>
      {{#each education}}
      <div class="education-item">
        <div class="edu-degree">{{degree}}</div>
        <div class="edu-school">{{university}} ({{startDate}} - {{endDate}})</div>
      </div>
      {{/each}}
      
      <h3 class="section-title">Skills</h3>
      <ul class="skills-list">
        {{#each skills}}<li>{{this}}</li>{{/each}}
      </ul>
      
      {{#if languages}}
      <h3 class="section-title">Languages</h3>
      <ul class="languages-list">
        {{#each languages}}<li>{{this}}</li>{{/each}}
      </ul>
      {{/if}}
    </div>
    
    <!-- Right Column -->
    <div class="right-column">
      <h1 class="name">{{firstName}} {{headline}}</h1>
      {{#if jobTitle}}<div class="job-title">{{jobTitle}}</div>{{/if}}
      
      {{#if profile}}
      <h3 class="section-title">Profile</h3>
      <p class="profile-text">{{profile}}</p>
      {{/if}}
      
      <h3 class="section-title">Work Experience</h3>
      {{#each experiences}}
      <div class="experience-item">
        <div class="job-position">{{workingPosition}}</div>
        <div class="job-company">{{companyName}} ({{startDate}} - {{endDate}})</div>
        {{#if description}}
        <ul>
          {{#each description}}<li>{{this}}</li>{{/each}}
        </ul>
        {{/if}}
      </div>
      {{/each}}
      
      {{#if references}}
      <h3 class="section-title">References</h3>
      {{#each references}}
      <div class="reference-item">
        <div class="reference-person">{{name}}</div>
        <div class="reference-title">{{title}} at {{company}}</div>
      </div>
      {{/each}}
      {{/if}}
    </div>
  </div>
</body>
</html>
`;
