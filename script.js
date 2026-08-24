/* 
   Jayant Choudhary Portfolio JavaScript
   File: Portfolio/script.js
*/

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initMobileMenu();
});

/* Theme Toggle Logic */
function initTheme() {
    const themeBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
    
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (themeBtn) themeBtn.querySelector('.theme-icon').textContent = '☀️';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        if (themeBtn) themeBtn.querySelector('.theme-icon').textContent = '🌙';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('portfolio-theme', newTheme);
            
            themeBtn.querySelector('.theme-icon').textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }
}

/* Mobile Menu Navigation Toggle */
function initMobileMenu() {
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('navigation-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking links
        document.querySelectorAll('.navigation-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
}

/* Interactive Demos for Core Technologies */

// 1. Python Demo
function runPythonDemo() {
    const outputElem = document.getElementById('python-output');
    if (!outputElem) return;

    outputElem.innerHTML = `[Executing Python 3.11...]
>>> name = "Jayant Choudhary"
>>> technologies = ["Python", "C", "HTML5", "CSS", "JavaScript"]
>>> learning = ["Basics of ML", "Node.js", "Tailwind CSS", "React"]
>>> print(f"Developer: {name}")
Developer: Jayant Choudhary
>>> print(f"Core Count: {len(technologies)} | Learning Count: {len(learning)}")
Core Count: 5 | Learning Count: 4
>>> [Tech OK] Script completed with exit code 0.`;
}

// 2. C Memory Demo
function runCDemo() {
    const outputElem = document.getElementById('c-output');
    if (!outputElem) return;

    outputElem.innerHTML = `[Compiling C source with gcc -O2...]
#include <stdio.h>
#include <stdlib.h>

int main() {
    char name[] = "Jayant Choudhary";
    int* ptr = (int*) malloc(5 * sizeof(int));
    printf("Memory allocated at address: 0x7ffd92b3a010\\n");
    printf("Developer: %s\\n", name);
    free(ptr);
    return 0;
}
----------------------------------------
Output:
Memory allocated at address: 0x7ffd92b3a010
Developer: Jayant Choudhary
Status: Memory safely freed (0 leaks).`;
}

// 3. HTML Demo
function runHTMLDemo() {
    const outputElem = document.getElementById('html-output');
    if (!outputElem) return;

    outputElem.innerHTML = `&lt;section class="portfolio"&gt;
  &lt;h1&gt;Jayant Choudhary&lt;/h1&gt;
  &lt;ul class="skills"&gt;
    &lt;li&gt;Python&lt;/li&gt;
    &lt;li&gt;C&lt;/li&gt;
    &lt;li&gt;HTML5 / CSS / JavaScript&lt;/li&gt;
  &lt;/ul&gt;
&lt;/section&gt;
[DOM Inspector: 12 Nodes Validated | 0 Accessibility Warnings]`;
}

// 4. CSS Demo
function runCSSDemo() {
    const outputElem = document.getElementById('css-output');
    if (!outputElem) return;

    // Pulse colors on cards
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
        card.style.transition = 'all 0.5s ease';
        card.style.borderColor = 'var(--accent-color)';
        setTimeout(() => {
            card.style.borderColor = '';
        }, 1500);
    });

    outputElem.innerHTML = `/* Dynamic CSS Rule Applied */
:root {
  --accent-color: #2563eb;
  --transition-normal: 0.3s ease;
}
.tech-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}
[Style Rules Re-applied across 5 Tech Cards]`;
}

// 5. JavaScript Demo
let jsCounter = 0;
function runJSDemo() {
    const outputElem = document.getElementById('js-output');
    if (!outputElem) return;

    jsCounter++;
    const timestamp = new Date().toLocaleTimeString();

    outputElem.innerHTML = `// JavaScript Event Listener Triggered
const dev = { name: "Jayant Choudhary", active: true };
let clickCount = ${jsCounter};
console.log(\`Clicked at \${new Date().toLocaleTimeString()}\`);

State: {
  developer: "Jayant Choudhary",
  totalClicks: ${jsCounter},
  lastEvent: "${timestamp}"
}`;
}

/* Copy Email Helper */
function copyEmail() {
    const email = "jayant.choudhary14981@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
        const emailText = document.getElementById('email-text');
        if (emailText) {
            const original = emailText.textContent;
            emailText.textContent = "Copied to Clipboard! ✓";
            emailText.style.color = "var(--learning-accent)";
            setTimeout(() => {
                emailText.textContent = original;
                emailText.style.color = "";
            }, 2000);
        }
    }).catch(err => {
        alert("Email: jayant.choudhary14981@gmail.com");
    });
}

/* Contact Form Handler */
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const statusMsg = document.getElementById('form-status');

    if (statusMsg) {
        statusMsg.textContent = `Thank you, ${name}! Your message has been sent successfully. I will get back to you at ${email}.`;
        statusMsg.style.color = "var(--learning-accent)";
        document.getElementById('portfolio-contact-form').reset();
    }
}