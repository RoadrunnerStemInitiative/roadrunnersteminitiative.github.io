---
layout: layout.njk
title: Board Interest
---
<main>
  <section class="interestform-section">
    <h2>Board of Directors Interest Form</h2>

<form name="board-interest" method="POST" data-netlify="true" netlify-honeypot="bot-field">
  <input type="hidden" name="form-name" value="board-interest">
    <p hidden>
    <label>Don’t fill this out if you're human: <input name="bot-field"></label>
    </p>

<form name="board-interest" method="POST" data-netlify="true">
<input type="hidden" name="form-name" value="board-interest">

<label>Full Name:<br>
  <input type="text" name="name" placeholder="John Doe" required>
</label>
  <br>

<label>Email:<br>
  <input type="email" name="email" placeholder="name@email.com" required>
</label>
  <br>

<label>Phone Number:<br>
  <input type="tel" name="phone" placeholder="(575) 555-1234">
</label>
  <br>

<label>Mailing Address:<br>
  <textarea name="address" placeholder="123 Main St, Las Cruces, NM" rows="2"></textarea>
</label>
  <br>

<label>Community Role:<br>
  <select name="community_role" required>
    <option value="" disabled selected>Select an option</option>
    <option value="Parent or Guardian">Parent or Guardian</option>
    <option value="Educator (K–12 or Higher Ed)">Educator (K–12 or Higher Ed)</option>
    <option value="STEM Professional">STEM Professional</option>
    <option value="Local Business Owner or Leader">Local Business Owner or Leader</option>
    <option value="Nonprofit or Community Advocate">Nonprofit or Community Advocate</option>
    <option value="Student (High School or College)">Student (High School or College)</option>
    <option value="Other">Other</option>
    <input type="text" name="interest_area_other" id="other-text" placeholder="Please specify" style="display: none;">
  </select>
</label>
<div id="community-other-container" style="display: none; margin-top: 1rem;">
  <label>Please specify your role:<br>
    <input type="text" name="community_role_other" id="community-other-text" placeholder="Tell us your role">
  </label>
</div>

  <br>

<label>Pronouns (optional):<br>
  <input type="text" name="pronouns" placeholder="e.g. she/her, they/them">
</label>
  <br>

<label>LinkedIn Profile (optional):<br>
  <input type="url" name="linkedin" placeholder="https://linkedin.com/in/yourname">
</label>
  <br>

<label>Relevant Experience:<br>
  <textarea name="experience" placeholder="Relevant skills or past involvement" rows="4" required></textarea>
</label>
  <br>

<label>Interest Areas:</label>
  <div class="checkbox-group">
    
  <div class="checkbox-row">
      <label for="fundraising">Fundraising</label> 
        <input type="checkbox" name="interest_area" value="Fundraising" id="fundraising">
  </div>
    
  <div class="checkbox-row">
    <label for="outreach">Community Outreach</label>
      <input type="checkbox" name="interest_area" value="Community Outreach" id="outreach">
  </div>
  
  <div class="checkbox-row">
    <label for="stem">STEM Education</label>
    <input type="checkbox" name="interest_area" value="STEM Education" id="stem">
  </div>
  
  <div class="checkbox-row">
    <label for="policy">Policy / Advocacy</label>
    <input type="checkbox" name="interest_area" value="Policy / Advocacy" id="policy">
  </div>
  
  <div class="checkbox-row">
    <label for="finance">Finance / Legal</label>
    <input type="checkbox" name="interest_area" value="Finance / Legal" id="finance">
  </div>
  
  <div class="checkbox-row">
    <label for="other">Other</label>
    <input type="checkbox" name="interest_area" value="Other" id="other">
      <input type="text" name="interest_area_other" id="other-text" placeholder="Please specify" style="display: none;">
  </div>
  
  </div>
    <br>

<label>Why do you want to join the board?<br>
  <textarea name="motivation" placeholder="Why would you like to serve on the board?" rows="4" required></textarea>
</label>
<br>

<label>How many hours per month can you commit?<br>
  <input type="text" name="availability" placeholder="e.g., 5 hours/month">
</label>
<br>

<label>Resume Link (optional):<br>
  <input type="url" name="resume_link" placeholder="Google Drive, Dropbox, etc.">
</label>
<br>

<div class="resume-email-note">
  <p>If you'd prefer to email your resume directly, please send it to:</p>
  <a href="mailto:roadrunnersteminitiative+resume@gmail.com" class="button" style="margin-top: 0.5rem;">Email Resume</a>
</div>
<br>

<label>Demographics (optional):<br>
  <textarea name="demographics" placeholder="Share anything you’d like us to know (race/ethnicity, gender identity, etc.)"></textarea>
</label>
<br>

<button type="submit" class="button">Submit Interest</button>

</form>
  </section>

<script>
  const otherCheckbox = document.getElementById('other');
  const otherText = document.getElementById('other-text');

  otherCheckbox.addEventListener('change', () => {
    otherText.style.display = otherCheckbox.checked ? 'block' : 'none';
  });
</script>
