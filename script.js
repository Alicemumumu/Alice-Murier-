{\rtf1\ansi\ansicpg1252\cocoartf2867
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.addEventListener('DOMContentLoaded', () => \{\
    \
    // --- Mobile Menu Toggle ---\
    const hamburger = document.getElementById('hamburger');\
    const navLinks = document.getElementById('nav-links');\
\
    hamburger.addEventListener('click', () => \{\
        navLinks.classList.toggle('active');\
        \
        // Toggle icon between bars and times (x)\
        const icon = hamburger.querySelector('i');\
        if (navLinks.classList.contains('active')) \{\
            icon.classList.remove('fa-bars');\
            icon.classList.add('fa-times');\
        \} else \{\
            icon.classList.remove('fa-times');\
            icon.classList.add('fa-bars');\
        \}\
    \});\
\
    // --- Close menu when a link is clicked (Mobile) ---\
    document.querySelectorAll('.nav-link').forEach(link => \{\
        link.addEventListener('click', () => \{\
            navLinks.classList.remove('active');\
            const icon = hamburger.querySelector('i');\
            icon.classList.remove('fa-times');\
            icon.classList.add('fa-bars');\
        \});\
    \});\
\
    // --- Smooth Scroll (Extra browser compatibility) ---\
    document.querySelectorAll('a[href^="#"]').forEach(anchor => \{\
        anchor.addEventListener('click', function (e) \{\
            e.preventDefault();\
            document.querySelector(this.getAttribute('href')).scrollIntoView(\{\
                behavior: 'smooth'\
            \});\
        \});\
    \});\
\});}