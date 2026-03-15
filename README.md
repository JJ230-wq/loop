<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loop - Discord's Premier All-in-One App</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 300;
            line-height: 1.6;
            overflow-x: hidden;
            background: #000;
            color: #fff;
            min-height: 100vh;
            position: relative;
        }
        .starfield {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            background: radial-gradient(ellipse at center, #0a0a0a 0%, #000 100%);
        }
        .star {
            position: absolute;
            background: #fff;
            border-radius: 50%;
            animation: twinkle 4s infinite;
        }
        @keyframes twinkle {
            0%, 100% { opacity: 0.2; }
            50% { opacity: 1; }
        }
        .shooting-star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: #fff;
            border-radius: 50%;
            box-shadow: 0 0 10px 2px rgba(255, 255, 255, 0.8);
            animation: shoot 3s linear infinite;
        }
        @keyframes shoot {
            0% {
                transform: translateX(0) translateY(0);
                opacity: 1;
            }
            100% {
                transform: translateX(500px) translateY(300px);
                opacity: 0;
            }
        }
        .infinity-pattern {
            position: absolute;
            width: 100%;
            height: 100%;
            opacity: 0.03;
            background-image: url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 15c0-8.284-6.716-15-15-15S0 6.716 0 15s6.716 15 15 15c3.513 0 6.742-1.207 9.299-3.222C26.856 28.793 30.085 30 33.598 30c8.284 0 15-6.716 15-15s-6.716-15-15-15-15 6.716-15 15c0 3.513 1.207 6.742 3.222 9.299C24.207 21.856 23 25.085 23 28.598c0 8.284 6.716 15 15 15s15-6.716 15-15-6.716-15-15-15c-3.513 0-6.742 1.207-9.299 3.222C26.856 8.793 30.085 7 33.598 7c8.284 0 15 6.716 15 15s-6.716 15-15 15c-3.513 0-6.742-1.207-9.299-3.222z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
            background-repeat: repeat;
            background-size: 200px 100px;
        }
        
        .top-left-logo {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1001;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(0, 0, 0, 0.6);
            backdrop-filter: blur(5px);
            -webkit-backdrop-filter: blur(5px);
            border-radius: 50%;
            border: 1px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
            opacity: 0;
            animation: fadeIn 0.8s ease-out forwards;
            cursor: pointer;            box-shadow: 0 0 25px rgba(255, 255, 255, 0.15);
        }
        .top-left-logo:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: scale(1.15) rotate(180deg);
            box-shadow: 0 0 35px rgba(255, 255, 255, 0.4);
            border-color: rgba(255, 255, 255, 0.3);
        }
        .top-left-logo img {
            width: 30px;
            height: 30px;
            animation: rotate 20s linear infinite;
        }
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
            to { opacity: 1; }
        }
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        header {
            position: fixed;
            top: 0;
            width: 100%;
            padding: 20px 0;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 0 0 20px 20px;
            transition: all 0.3s ease;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        .header-container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .nav-links {
            display: flex;
            gap: 30px;
            opacity: 0;
            animation: fadeIn 0.8s ease-out 0.2s forwards;
        }
        .nav-links a {
            color: rgba(255, 255, 255, 0.7);
            text-decoration: none;
            font-weight: 400;
            transition: all 0.3s ease;
            position: relative;
            padding: 8px 16px;
            border-radius: 20px;
        }
        .nav-links a:hover {
            color: #fff;
            background: rgba(255, 255, 255, 0.05);
        }
        main {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 120px 0 60px;
            text-align: center;
            position: relative;
        }
        .main-content {
            max-width: 800px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
            background: rgba(255, 255, 255, 0.01);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
            padding: 50px;
            border-radius: 30px;
            border: 1px solid rgba(255, 255, 255, 0.05);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
            transform: translateY(0);
            transition: transform 0.3s ease;
        }
        .main-content:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
        }
        .main-content h1 {
            font-size: clamp(2.5rem, 8vw, 4rem);
            margin-bottom: 25px;
            font-weight: 300;
            letter-spacing: -1px;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }
        .gradient-text {
            background: linear-gradient(135deg, #fff, #ccc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            position: relative;
            font-weight: 500;
        }
        .main-content p {
            font-size: clamp(1.1rem, 3vw, 1.4rem);
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 45px;
            line-height: 1.8;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease-out 0.6s forwards;
            font-weight: 300;
        }
        .button-container {
            display: flex;
            justify-content: center;
            gap: 25px;
            margin-bottom: 0;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 0.8s ease-out 0.8s forwards;
        }
        .btn {
            padding: 18px 36px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 400;
            font-size: 1.1rem;
            display: inline-flex;
            align-items: center;
            gap: 12px;
            transition: all 0.3s ease;
            border: none;
            cursor: pointer;
            position: relative;
            background: transparent;
            z-index: 1;
            overflow: hidden;
            letter-spacing: 0.5px;
        }
        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50px;
            padding: 2px;
            background: linear-gradient(90deg, #fff, #ccc);
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            z-index: -1;
            transition: all 0.3s ease;
            opacity: 0.8;
        }
        .btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(255, 255, 255, 0.15);
        }
        .btn i {
            color: #fff;
            font-size: 1.2rem;
        }
        .btn span {
            color: #fff;
        }
        
        /* Features Section Styles */
        .features-section {
            padding: 80px 0;
            background: rgba(0, 0, 0, 0.02);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            border-top: 1px solid rgba(255, 255, 255, 0.02);
        }
        
        .features-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .features-header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .features-header h2 {
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #fff, #ccc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .features-header p {
            font-size: 1.2rem;
            color: rgba(255, 255, 255, 0.7);
            font-weight: 300;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
        }
        
        .feature-card {
            background: rgba(255, 255, 255, 0.005);
            border: 1px solid rgba(255, 255, 255, 0.02);
            border-radius: 20px;
            padding: 40px 30px;
            text-align: center;
            transition: all 0.3s ease;
            position: relative;
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
        }
        
        .feature-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.02);
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .feature-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 25px;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
        }
        
        .feature-card:hover .feature-icon {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2);
            transform: scale(1.1);
        }
        
        .feature-icon i {
            font-size: 2rem;
            color: #fff;
        }
        
        .feature-card h3 {
            font-size: 1.5rem;
            font-weight: 500;
            color: #fff;
            margin-bottom: 15px;
        }
        
        .feature-card p {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            font-size: 1rem;
            font-weight: 300;
        }
        
        @media (max-width: 768px) {
            .features-grid {
                grid-template-columns: 1fr;
            }
            
            .features-header h2 {
                font-size: 2rem;
            }
            
            .feature-card {
                padding: 30px 20px;
            }
        }
        
        /* Ultra Modern Minimalistic Loading Screen */
        .loading-screen {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #000;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            opacity: 1;
            transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .loading-screen.fade-out {
            opacity: 0;
            pointer-events: none;
        }
        
        .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 24px;
        }
        
        .loading-logo {
            width: 48px;
            height: 48px;
            opacity: 0;
            animation: logoFadeIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s forwards, logoFloat 2s ease-in-out infinite 1s;
        }
        
        
        .loading-text {
            color: rgba(255, 255, 255, 0.7);
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 0.875rem;
            font-weight: 300;
            letter-spacing: 0.5px;
            opacity: 0;
            animation: textFadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.8s forwards;
        }
        
        .loading-progress {
            width: 120px;
            height: 1px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 0.5px;
            overflow: hidden;
            opacity: 0;
            animation: progressFadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) 1s forwards;
        }
        
        .loading-progress-bar {
            height: 100%;
            background: rgba(255, 255, 255, 0.8);
            border-radius: 0.5px;
            width: 0%;
            animation: progressFill 1.5s cubic-bezier(0.4, 0, 0.2, 1) 1.2s forwards;
        }
        
        @keyframes logoFadeIn {
            from { 
                opacity: 0; 
                transform: scale(0.9) translateY(8px); 
            }
            to { 
                opacity: 1; 
                transform: scale(1) translateY(0); 
            }
        }
        
        @keyframes logoFloat {
            0%, 100% { 
                transform: translateY(0px) rotate(0deg); 
            }
            50% { 
                transform: translateY(-8px) rotate(2deg); 
            }
        }
        
        
        @keyframes textFadeIn {
            from { 
                opacity: 0; 
                transform: translateY(4px); 
            }
            to { 
                opacity: 1; 
                transform: translateY(0); 
            }
        }
        
        @keyframes progressFadeIn {
            from { 
                opacity: 0; 
                transform: scaleX(0); 
            }
            to { 
                opacity: 1; 
                transform: scaleX(1); 
            }
        }
        
        @keyframes progressFill {
            0% { width: 0%; }
            100% { width: 100%; }
        }
        
        
        /* Commands Section Styles */
        .commands-section {
            padding: 80px 0;
            background: rgba(0, 0, 0, 0.02);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            border-top: 1px solid rgba(255, 255, 255, 0.02);
        }
        
        .commands-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .commands-header {
            text-align: center;
            margin-bottom: 50px;
        }
        
        .commands-header h2 {
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #fff, #ccc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .commands-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
            gap: 20px;
            flex-wrap: wrap;
        }
        
        .filter-group {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .clear-filters {
            padding: 8px 16px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 6px;
        }
        
        .clear-filters:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.2);
            color: #fff;
        }
        
        .clear-filters:disabled {
            opacity: 0.3;
            cursor: not-allowed;
        }
        
        .search-container {
            position: relative;
            flex: 1;
            max-width: 400px;
        }
        
        .search-input {
            width: 100%;
            padding: 12px 16px 12px 45px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 25px;
            color: #fff;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        
        .search-input:focus {
            outline: none;
            border-color: rgba(255, 255, 255, 0.3);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
        }
        
        .search-input::placeholder {
            color: rgba(255, 255, 255, 0.5);
        }
        
        .search-clear {
            position: absolute;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.5);
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            opacity: 0;
            pointer-events: none;
        }
        
        .search-clear.visible {
            opacity: 1;
            pointer-events: all;
        }
        
        .search-clear:hover {
            color: #fff;
        }
        
        .search-icon {
            position: absolute;
            left: 16px;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255, 255, 255, 0.5);
            font-size: 1.1rem;
        }
        
        .category-filter {
            padding: 12px 20px;
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 25px;
            color: #fff;
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: 1rem;
            font-weight: 300;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            min-width: 150px;
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
            background-repeat: no-repeat;
            background-position: right 12px center;
            background-size: 16px;
            padding-right: 40px;
            position: relative;
            overflow: hidden;
        }
        
        .category-filter:focus {
            outline: none;
            border-color: rgba(255, 255, 255, 0.3);
            background-color: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.1);
            transform: translateY(-1px);
        }
        
        .category-filter:hover {
            background-color: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        
        .category-filter:active {
            transform: translateY(0);
            transition: all 0.1s ease;
        }
        
        .category-filter option {
            background: #1a1a1a;
            color: #fff;
            padding: 8px 12px;
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-weight: 300;
            border-radius: 8px;
        }
        
        .category-filter option:hover {
            background: #2a2a2a;
        }
        
        .command-count {
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
            margin-bottom: 20px;
        }
        
        .commands-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 20px;
        }
        
        .command-card {
            background: rgba(255, 255, 255, 0.005);
            border: 1px solid rgba(255, 255, 255, 0.02);
            border-radius: 15px;
            padding: 25px;
            transition: all 0.3s ease;
            position: relative;
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
        }
        
        .command-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .command-name {
            font-size: 1.4rem;
            font-weight: 600;
            color: #fff;
            margin-bottom: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .command-prefix {
            color: rgba(255, 255, 255, 0.6);
            font-weight: 400;
        }
        
        .command-category {
            position: absolute;
            top: 15px;
            right: 15px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: #fff;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 500;
        }
        
        .command-description {
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.95rem;
            line-height: 1.5;
            margin-bottom: 15px;
        }
        
        .subcommands-section {
            margin-top: 15px;
        }
        
        .subcommands-label {
            color: rgba(255, 255, 255, 0.6);
            font-size: 0.85rem;
            margin-bottom: 8px;
        }
        
        .subcommand-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
        }
        
        .subcommand-tag {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: rgba(255, 255, 255, 0.9);
            padding: 4px 10px;
            border-radius: 15px;
            font-size: 0.8rem;
            transition: all 0.3s ease;
        }
        
        .subcommand-tag:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.3);
        }
        
        .command-card[data-category] {
            transition: all 0.3s ease;
        }
        
        .command-card.highlight {
            background: rgba(255, 255, 255, 0.08);
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
        }
        
        .search-highlight {
            background: rgba(255, 255, 255, 0.2);
            padding: 2px 4px;
            border-radius: 3px;
        }
        
        .filter-active {
            background: rgba(255, 255, 255, 0.1) !important;
            border-color: rgba(255, 255, 255, 0.3) !important;
        }
        
        /* Statistics Section */
        .stats-section {
            padding: 80px 0;
            background: rgba(0, 0, 0, 0.02);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
            border-top: 1px solid rgba(255, 255, 255, 0.02);
        }
        
        .stats-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 40px;
            text-align: center;
        }
        
        .stat-card {
            background: rgba(255, 255, 255, 0.005);
            border: 1px solid rgba(255, 255, 255, 0.02);
            border-radius: 20px;
            padding: 40px 20px;
            transition: all 0.3s ease;
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
        }
        
        .stat-card:hover {
            transform: translateY(-10px);
            background: rgba(255, 255, 255, 0.02);
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .stat-number {
            font-size: 3rem;
            font-weight: 700;
            color: #fff;
            margin-bottom: 10px;
            background: linear-gradient(135deg, #fff, #ccc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .stat-label {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.1rem;
            font-weight: 300;
        }
        
        /* FAQ Section */
        .faq-section {
            padding: 80px 0;
            background: rgba(0, 0, 0, 0.01);
            backdrop-filter: blur(3px);
            -webkit-backdrop-filter: blur(3px);
        }
        
        .faq-container {
            max-width: 800px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .faq-header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .faq-header h2 {
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #fff, #ccc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .faq-item {
            background: rgba(255, 255, 255, 0.005);
            border: 1px solid rgba(255, 255, 255, 0.02);
            border-radius: 15px;
            margin-bottom: 20px;
            overflow: hidden;
            transition: all 0.3s ease;
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
        }
        
        .faq-item:hover {
            background: rgba(255, 255, 255, 0.02);
            border-color: rgba(255, 255, 255, 0.1);
        }
        
        .faq-question {
            padding: 25px 30px;
            cursor: pointer;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
        }
        
        .faq-question:hover {
            background: rgba(255, 255, 255, 0.05);
        }
        
        .faq-question h3 {
            color: #fff;
            font-size: 1.2rem;
            font-weight: 400;
            margin: 0;
        }
        
        .faq-icon {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.2rem;
            transition: transform 0.3s ease;
        }
        
        .faq-item.active .faq-icon {
            transform: rotate(45deg);
        }
        
        .faq-answer {
            padding: 0 30px;
            max-height: 0;
            overflow: hidden;
            transition: all 0.3s ease;
        }
        
        .faq-item.active .faq-answer {
            padding: 0 30px 25px 30px;
            max-height: 200px;
        }
        
        .faq-answer p {
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.6;
            margin: 0;
        }
        
        /* Testimonials Section */
        .testimonials-section {
            padding: 80px 0;
            background: rgba(0, 0, 0, 0.02);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
        }
        
        .testimonials-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .testimonials-header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .testimonials-header h2 {
            font-size: 2.5rem;
            font-weight: 300;
            margin-bottom: 20px;
            background: linear-gradient(135deg, #fff, #ccc);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .testimonials-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
        }
        
        .testimonial-card {
            background: rgba(255, 255, 255, 0.005);
            border: 1px solid rgba(255, 255, 255, 0.02);
            border-radius: 20px;
            padding: 30px;
            transition: all 0.3s ease;
            backdrop-filter: blur(1px);
            -webkit-backdrop-filter: blur(1px);
        }
        
        .testimonial-card:hover {
            transform: translateY(-5px);
            background: rgba(255, 255, 255, 0.02);
            border-color: rgba(255, 255, 255, 0.1);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }
        
        .testimonial-content {
            color: rgba(255, 255, 255, 0.9);
            font-style: italic;
            line-height: 1.6;
            margin-bottom: 20px;
            font-size: 1.1rem;
        }
        
        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .testimonial-avatar {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: linear-gradient(135deg, #fff, #ccc);
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            font-weight: 600;
            font-size: 1.2rem;
        }
        
        .testimonial-info h4 {
            color: #fff;
            margin: 0 0 5px 0;
            font-weight: 500;
        }
        
        .testimonial-info p {
            color: rgba(255, 255, 255, 0.6);
            margin: 0;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .commands-controls {
                flex-direction: column;
                align-items: stretch;
            }
            
            .search-container {
                max-width: none;
            }
            
            .filter-group {
                justify-content: space-between;
            }
            
            .commands-grid {
                grid-template-columns: 1fr;
            }
            
            .commands-header h2 {
                font-size: 2rem;
            }
            
            .stats-grid {
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 30px;
            }
            
            .stat-number {
                font-size: 2.5rem;
            }
            
            .testimonials-grid {
                grid-template-columns: 1fr;
            }
            
            .faq-question {
                padding: 20px;
            }
            
            .faq-answer {
                padding: 0 20px;
            }
            
            .faq-item.active .faq-answer {
                padding: 0 20px 20px 20px;
            }
        }
    </style>
</head>
<body>
    <!-- Loading Screen -->
    <div class="loading-screen" id="loadingScreen">
        <div class="loading-container">
            <img src="https://z-cdn-media.chatglm.cn/files/a0916708-c3d2-4701-8105-4821dcc643b9_loop.png?auth_key=1789402497-7b525e7bd07845629a427f276a46a142-0-f94b59b3d77cb14b0e5bb6783ce74329" alt="Loop Bot Logo" class="loading-logo" id="loadingLogo">
            <div class="loading-text" id="loadingText">Loading</div>
            <div class="loading-progress">
                <div class="loading-progress-bar"></div>
            </div>
        </div>
    </div>
    
    <!-- Enhanced Animated Background -->
    <div class="starfield" id="starfield">
        <div class="infinity-pattern"></div>
    </div>
    
    
    <!-- Enhanced Top Left Logo -->
    <a href="#" class="top-left-logo">
        <img src="https://z-cdn-media.chatglm.cn/files/a0916708-c3d2-4701-8105-4821dcc643b9_loop.png?auth_key=1789402497-7b525e7bd07845629a427f276a46a142-0-f94b59b3d77cb14b0e5bb6783ce74329" alt="Loop Bot Logo">
    </a>
    
    <!-- Enhanced Header -->
    <header id="header">
        <div class="container header-container">
            <nav class="nav-links">
                <a href="#features">Features</a>
                <a href="#commands">Commands</a>
                <a href="https://discord.gg/UdFTPjhETq" target="_blank" rel="noopener noreferrer">Premium</a>
                <a href="https://discord.gg/UdFTPjhETq" target="_blank" rel="noopener noreferrer">Support</a>
            </nav>
        </div>
    </header>
    
    <!-- Enhanced Main Content -->
    <main>
        <div class="container">
            <div class="main-content">
                <h1><span class="gradient-text">Loop</span> is Discord's premier all-in-one app</h1>
                <p>Loop is the ultimate all-in-one Discord bot designed to keep your server running properly and smoothly with advanced protection, logging, economy, and more.</p>
                <div class="button-container">
                    <a href="https://discord.gg/UdFTPjhETq" target="_blank" rel="noopener noreferrer" class="btn">
                        <i class="fas fa-shopping-cart"></i> <span>Purchase</span>
                    </a>
                </div>
            </div>
        </div>
    </main>
    
    <!-- Features Section -->
    <section id="features" class="features-section">
        <div class="features-container">
            <div class="features-header">
                <h2>Features</h2>
                <p>Discover what makes Loop the ultimate Discord bot</p>
            </div>
            
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Advanced Protection</h3>
                    <p>Comprehensive anti-raid, anti-nuke, and moderation tools to keep your server safe from malicious users and attacks.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-coins"></i>
                    </div>
                    <h3>Economy System</h3>
                    <p>Complete economy with daily rewards, gambling games, shop system, and leaderboards to engage your community.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-cog"></i>
                    </div>
                    <h3>Server Management</h3>
                    <p>Powerful tools for role management, channel organization, auto-moderation, and server customization.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-chart-line"></i>
                    </div>
                    <h3>Analytics & Logging</h3>
                    <p>Detailed logging system and server analytics to track activity, moderation actions, and server growth.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <h3>Fun & Entertainment</h3>
                    <p>Engaging games, roleplay commands, image generation, and interactive features to keep your community active.</p>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Community Features</h3>
                    <p>Welcome messages, auto-roles, leveling system, and boost rewards to build a thriving community.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Statistics Section -->
    <section class="stats-section">
        <div class="stats-container">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number" data-target="20">0</div>
                    <div class="stat-label">Servers</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-target="2000">0</div>
                    <div class="stat-label">Users</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-target="99.9">0</div>
                    <div class="stat-label">Uptime %</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-target="24">0</div>
                    <div class="stat-label">Hours Support</div>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Commands Section -->
    <section id="commands" class="commands-section">
        <div class="commands-container">
            <div class="commands-header">
                <h2>Commands</h2>
                <p>Explore all available commands for Loop Bot</p>
            </div>
            
            <div class="commands-controls">
                <div class="search-container">
                    <i class="fas fa-search search-icon"></i>
                    <input type="text" class="search-input" placeholder="Search commands..." id="commandSearch">
                    <i class="fas fa-times search-clear" id="searchClear"></i>
                </div>
                <div class="filter-group">
                    <select class="category-filter" id="categoryFilter" title="Filter commands by category">
                        <option value="all">ALL</option>
                        <option value="moderation">MODERATION</option>
                        <option value="economy">ECONOMY</option>
                        <option value="utility">UTILITY</option>
                        <option value="fun">FUN</option>
                        <option value="information">INFORMATION</option>
                        <option value="settings">SETTINGS</option>
                    </select>
                    <button class="clear-filters" id="clearFilters" disabled>
                        <i class="fas fa-times"></i>
                        Clear
                    </button>
                </div>
            </div>
            
            <div class="command-count" id="commandCount">Showing 0 of 0 commands</div>
            
            <div class="commands-grid" id="commandsGrid">
                <!-- Commands will be populated by JavaScript -->
            </div>
        </div>
    </section>
    
    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="faq-container">
            <div class="faq-header">
                <h2>Frequently Asked Questions</h2>
                <p>Everything you need to know about Loop Bot</p>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    <h3>How do I invite Loop Bot to my server?</h3>
                    <i class="fas fa-plus faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p>Simply click the "Purchase" button above to join our Discord server, where you'll find the invite link and setup instructions. Our support team will guide you through the entire process.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    <h3>What makes Loop Bot different from other Discord bots?</h3>
                    <i class="fas fa-plus faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p>Loop Bot offers a comprehensive all-in-one solution with advanced moderation, economy system, logging, and entertainment features. Our bot is constantly updated with new features and has 99.9% uptime.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    <h3>Is Loop Bot free to use?</h3>
                    <i class="fas fa-plus faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p>Loop Bot offers both free and premium tiers. The free version includes basic features, while premium unlocks advanced moderation tools, economy features, and priority support.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    <h3>How do I get support if I have issues?</h3>
                    <i class="fas fa-plus faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p>Join our Discord support server using the "Support" link above. Our team provides 24/7 support and will help you resolve any issues quickly.</p>
                </div>
            </div>
            
            <div class="faq-item">
                <div class="faq-question">
                    <h3>Can I customize Loop Bot for my server?</h3>
                    <i class="fas fa-plus faq-icon"></i>
                </div>
                <div class="faq-answer">
                    <p>Yes! Loop Bot offers extensive customization options including custom prefixes, role management, channel settings, and personalized welcome messages. Use the settings commands to configure everything to your needs.</p>
                </div>
            </div>
        </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials-section">
        <div class="testimonials-container">
            <div class="testimonials-header">
                <h2>What Our Users Say</h2>
                <p>Join thousands of satisfied server owners</p>
            </div>
            
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        "Loop Bot has completely transformed our server management. The moderation tools are incredibly powerful and the economy system keeps our community engaged daily."
                    </div>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">A</div>
                        <div class="testimonial-info">
                            <h4>Alex Johnson</h4>
                            <p>Server Owner, Gaming Community</p>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        "The best Discord bot I've ever used. The support team is amazing and the bot never goes down. Worth every penny for premium features."
                    </div>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">S</div>
                        <div class="testimonial-info">
                            <h4>Sarah Chen</h4>
                            <p>Community Manager, Tech Server</p>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-card">
                    <div class="testimonial-content">
                        "Loop Bot's logging system is phenomenal. We can track everything that happens in our server and the economy features have increased member activity by 300%."
                    </div>
                    <div class="testimonial-author">
                        <div class="testimonial-avatar">M</div>
                        <div class="testimonial-info">
                            <h4>Mike Rodriguez</h4>
                            <p>Admin, Large Gaming Guild</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <script>
        // Create enhanced animated stars
        function createStars() {
            const starfield = document.getElementById('starfield');
            const numberOfStars = 400;
            
            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Create circular dots instead of squares
                const size = Math.random() * 2 + 0.5;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.borderRadius = '50%'; // This makes them circular dots
                
                // Random position
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                
                // Random animation
                star.style.animationDelay = `${Math.random() * 5}s`;
                star.style.animationDuration = `${Math.random() * 3 + 2}s`;
                
                starfield.appendChild(star);
            }
            
            // Create shooting stars
            for (let i = 0; i < 8; i++) {
                const shootingStar = document.createElement('div');
                shootingStar.classList.add('shooting-star');
                
                const x = Math.random() * 100;
                const y = Math.random() * 50;
                const duration = Math.random() * 2 + 2;
                const delay = Math.random() * 15;
                
                shootingStar.style.left = `${x}%`;
                shootingStar.style.top = `${y}%`;
                shootingStar.style.animationDuration = `${duration}s`;
                shootingStar.style.animationDelay = `${delay}s`;
                
                starfield.appendChild(shootingStar);
            }
        }
        
        // Commands data with categories and descriptions
        const commandsData = [
            // Moderation Commands
            { name: 'ban', category: 'moderation', description: 'Ban a user from the server', subcommands: ['add', 'remove', 'list'] },
            { name: 'kick', category: 'moderation', description: 'Kick a user from the server', subcommands: ['add', 'remove', 'list'] },
            { name: 'mute', category: 'moderation', description: 'Mute a user in the server', subcommands: ['add', 'remove', 'list'] },
            { name: 'timeout', category: 'moderation', description: 'Timeout a user temporarily', subcommands: ['add', 'remove', 'list'] },
            { name: 'warn', category: 'moderation', description: 'Warn a user for rule violations', subcommands: ['add', 'remove', 'list'] },
            { name: 'purge', category: 'moderation', description: 'Delete multiple messages at once', subcommands: ['messages', 'user', 'bot'] },
            { name: 'lockdown', category: 'moderation', description: 'Lock down channels during emergencies', subcommands: ['start', 'end', 'status'] },
            { name: 'antinuke', category: 'moderation', description: 'Protect server from malicious actions', subcommands: ['enable', 'disable', 'status'] },
            { name: 'filter', category: 'moderation', description: 'Filter inappropriate content', subcommands: ['add', 'remove', 'list'] },
            { name: 'slowmode', category: 'moderation', description: 'Set slowmode for channels', subcommands: ['set', 'remove', 'status'] },
            { name: 'nuke', category: 'moderation', description: 'Delete and recreate a channel', subcommands: ['channel', 'category'] },
            { name: 'tempban', category: 'moderation', description: 'Temporarily ban a user', subcommands: ['add', 'remove', 'list'] },
            { name: 'softban', category: 'moderation', description: 'Soft ban a user (kick and delete messages)', subcommands: ['add', 'remove', 'list'] },
            { name: 'stripstaff', category: 'moderation', description: 'Remove all staff roles from a user', subcommands: ['user', 'role'] },
            
            // Economy Commands
            { name: 'balance', category: 'economy', description: 'Check your or another user\'s balance', subcommands: ['check', 'top'] },
            { name: 'daily', category: 'economy', description: 'Claim your daily reward', subcommands: ['claim', 'streak'] },
            { name: 'weekly', category: 'economy', description: 'Claim your weekly reward', subcommands: ['claim', 'streak'] },
            { name: 'monthly', category: 'economy', description: 'Claim your monthly reward', subcommands: ['claim', 'streak'] },
            { name: 'yearly', category: 'economy', description: 'Claim your yearly reward', subcommands: ['claim', 'streak'] },
            { name: 'work', category: 'economy', description: 'Work to earn money', subcommands: ['start', 'stop', 'status'] },
            { name: 'bet', category: 'economy', description: 'Bet money on various games', subcommands: ['amount', 'odds', 'history'] },
            { name: 'blackjack', category: 'economy', description: 'Play blackjack with your money', subcommands: ['hit', 'stand', 'double'] },
            { name: 'slots', category: 'economy', description: 'Play slot machines', subcommands: ['spin', 'history', 'stats'] },
            { name: 'mines', category: 'economy', description: 'Play minesweeper for money', subcommands: ['start', 'reveal', 'cashout'] },
            { name: 'steal', category: 'economy', description: 'Attempt to steal from other users', subcommands: ['attempt', 'history', 'stats'] },
            { name: 'give', category: 'economy', description: 'Give money to another user', subcommands: ['amount', 'reason'] },
            { name: 'deposit', category: 'economy', description: 'Deposit money to your bank', subcommands: ['amount', 'all'] },
            { name: 'withdraw', category: 'economy', description: 'Withdraw money from your bank', subcommands: ['amount', 'all'] },
            { name: 'shop', category: 'economy', description: 'View and purchase items from the shop', subcommands: ['view', 'buy', 'sell'] },
            { name: 'leaderboard', category: 'economy', description: 'View the economy leaderboard', subcommands: ['money', 'level', 'global'] },
            
            // Utility Commands
            { name: 'ping', category: 'utility', description: 'Check bot latency and response time', subcommands: ['latency', 'uptime'] },
            { name: 'serverinfo', category: 'utility', description: 'Get detailed information about the server', subcommands: ['members', 'channels', 'roles'] },
            { name: 'userinfo', category: 'utility', description: 'Get information about a user', subcommands: ['avatar', 'roles', 'activity'] },
            { name: 'uptime', category: 'utility', description: 'Check how long the bot has been online', subcommands: ['bot', 'server'] },
            { name: 'translate', category: 'utility', description: 'Translate text to different languages', subcommands: ['auto', 'detect', 'languages'] },
            { name: 'remind', category: 'utility', description: 'Set reminders for yourself', subcommands: ['add', 'list', 'remove'] },
            { name: 'quote', category: 'utility', description: 'Quote a message from the server', subcommands: ['message', 'user', 'channel'] },
            { name: 'snipe', category: 'utility', description: 'View recently deleted messages', subcommands: ['edit', 'delete', 'list'] },
            { name: 'timezone', category: 'utility', description: 'Set or view timezone information', subcommands: ['set', 'view', 'list'] },
            { name: 'membercount', category: 'utility', description: 'Display server member count', subcommands: ['total', 'online', 'bots'] },
            { name: 'seen', category: 'utility', description: 'Check when a user was last seen', subcommands: ['user', 'activity', 'status'] },
            
            // Fun Commands
            { name: 'hug', category: 'fun', description: 'Hug another user', subcommands: ['user', 'random', 'gif'] },
            { name: 'airkiss', category: 'fun', description: 'Send an air kiss to someone', subcommands: ['user', 'random', 'gif'] },
            { name: 'juul', category: 'fun', description: 'Juul related fun commands', subcommands: ['hit', 'stats', 'leaderboard'] },
            { name: 'roleplay', category: 'fun', description: 'Various roleplay commands', subcommands: ['hug', 'kiss', 'pat', 'slap'] },
            { name: 'stickers', category: 'fun', description: 'Manage and use custom stickers', subcommands: ['add', 'remove', 'list'] },
            { name: 'images', category: 'fun', description: 'Generate or fetch random images', subcommands: ['meme', 'cat', 'dog', 'anime'] },
            
            // Information Commands
            { name: 'help', category: 'information', description: 'Get help with bot commands', subcommands: ['command', 'category', 'all'] },
            { name: 'usage', category: 'information', description: 'Get detailed usage information for commands', subcommands: ['command', 'syntax', 'examples'] },
            { name: 'commands', category: 'information', description: 'List all available commands', subcommands: ['category', 'search', 'all'] },
            { name: 'status', category: 'information', description: 'Check bot and server status', subcommands: ['bot', 'server', 'api'] },
            { name: 'level', category: 'information', description: 'Check user level and XP', subcommands: ['user', 'leaderboard', 'rank'] },
            { name: 'leveling', category: 'information', description: 'Manage leveling system settings', subcommands: ['enable', 'disable', 'settings'] },
            { name: 'boost', category: 'information', description: 'Manage server boost rewards', subcommands: ['role', 'message', 'list'] },
            { name: 'boostmessages', category: 'information', description: 'Manage boost celebration messages', subcommands: ['set', 'remove', 'list'] },
            { name: 'boosterlist', category: 'information', description: 'List server boosters', subcommands: ['all', 'recent', 'top'] },
            { name: 'boosterrole', category: 'information', description: 'Manage booster roles', subcommands: ['add', 'remove', 'list'] },
            { name: 'braward', category: 'information', description: 'Manage boost rewards', subcommands: ['add', 'remove', 'list'] },
            { name: 'brbase', category: 'information', description: 'Manage boost reward base settings', subcommands: ['set', 'view', 'reset'] },
            { name: 'bricon', category: 'information', description: 'Set boost reward icons', subcommands: ['add', 'remove', 'list'] },
            { name: 'brremove', category: 'information', description: 'Remove boost rewards', subcommands: ['all', 'specific', 'user'] },
            { name: 'brrename', category: 'information', description: 'Rename boost rewards', subcommands: ['old', 'new', 'list'] },
            { name: 'bump', category: 'information', description: 'Bump the server for more visibility', subcommands: ['now', 'reminder', 'stats'] },
            { name: 'bumpreminder', category: 'information', description: 'Set up bump reminders', subcommands: ['enable', 'disable', 'interval'] },
            { name: 'counter', category: 'information', description: 'Create and manage counters', subcommands: ['add', 'remove', 'list'] },
            { name: 'firstmessage', category: 'information', description: 'View the first message in a channel', subcommands: ['channel', 'user', 'server'] },
            { name: 'geekbar', category: 'information', description: 'Display a geeky progress bar', subcommands: ['create', 'update', 'remove'] },
            { name: 'inrole', category: 'information', description: 'List users in a specific role', subcommands: ['role', 'count', 'search'] },
            { name: 'jaillist', category: 'information', description: 'List jailed users', subcommands: ['all', 'user', 'reason'] },
            { name: 'joinvc', category: 'information', description: 'Join a voice channel', subcommands: ['channel', 'random', 'create'] },
            { name: 'leavevc', category: 'information', description: 'Leave the current voice channel', subcommands: ['now', 'all', 'user'] },
            { name: 'members', category: 'information', description: 'Get member statistics', subcommands: ['count', 'growth', 'activity'] },
            { name: 'newmembers', category: 'information', description: 'View new member information', subcommands: ['recent', 'welcome', 'stats'] },
            { name: 'serverstats', category: 'information', description: 'Display detailed server statistics', subcommands: ['general', 'channels', 'members'] },
            { name: 'timeoutlist', category: 'information', description: 'List timed out users', subcommands: ['all', 'user', 'reason'] },
            { name: 'warnings', category: 'information', description: 'View user warnings', subcommands: ['user', 'all', 'clear'] },
            { name: 'whitelist', category: 'information', description: 'Manage whitelist for various features', subcommands: ['add', 'remove', 'list'] },
            { name: 'youtubenotis', category: 'information', description: 'Manage YouTube notification settings', subcommands: ['add', 'remove', 'list'] },
            
            // Settings Commands
            { name: 'prefix', category: 'settings', description: 'Manage the server prefix', subcommands: ['set', 'delete', 'list'] },
            { name: 'settings', category: 'settings', description: 'Configure bot settings for the server', subcommands: ['view', 'set', 'reset'] },
            { name: 'autorole', category: 'settings', description: 'Manage automatic role assignment', subcommands: ['add', 'remove', 'list'] },
            { name: 'autoresponder', category: 'settings', description: 'Set up automatic responses', subcommands: ['add', 'remove', 'list'] },
            { name: 'welcome', category: 'settings', description: 'Configure welcome messages', subcommands: ['message', 'channel', 'role'] },
            { name: 'log', category: 'settings', description: 'Configure logging settings', subcommands: ['channel', 'events', 'level'] },
            { name: 'tickets', category: 'settings', description: 'Manage ticket system', subcommands: ['setup', 'close', 'list'] },
            { name: 'voicemaster', category: 'settings', description: 'Manage voice channel creation', subcommands: ['setup', 'limit', 'category'] },
            { name: 'role', category: 'settings', description: 'Manage roles in the server', subcommands: ['create', 'delete', 'modify'] },
            { name: 'rolecreate', category: 'settings', description: 'Create new roles', subcommands: ['name', 'color', 'permissions'] },
            { name: 'roledelete', category: 'settings', description: 'Delete existing roles', subcommands: ['role', 'confirm', 'force'] },
            { name: 'roles', category: 'settings', description: 'List and manage all roles', subcommands: ['list', 'info', 'members'] },
            { name: 'setme', category: 'settings', description: 'Set personal preferences', subcommands: ['timezone', 'language', 'notifications'] },
            { name: 'template', category: 'settings', description: 'Manage server templates', subcommands: ['create', 'apply', 'list'] },
            { name: 'threadlock', category: 'settings', description: 'Lock or unlock threads', subcommands: ['lock', 'unlock', 'list'] },
            { name: 'unlock', category: 'settings', description: 'Unlock locked channels', subcommands: ['channel', 'all', 'category'] },
            { name: 'unlockall', category: 'settings', description: 'Unlock all locked channels', subcommands: ['confirm', 'category', 'role'] },
            { name: 'temprole', category: 'settings', description: 'Assign temporary roles', subcommands: ['add', 'remove', 'list'] },
            { name: 'restrictcommand', category: 'settings', description: 'Restrict command usage', subcommands: ['add', 'remove', 'list'] },
            { name: 'reactionrole', category: 'settings', description: 'Set up reaction roles', subcommands: ['add', 'remove', 'list'] },
            { name: 'reason', category: 'settings', description: 'Add reasons to moderation actions', subcommands: ['ban', 'kick', 'mute'] },
            { name: 'clearnames', category: 'settings', description: 'Clean up usernames', subcommands: ['all', 'specific', 'pattern'] },
            { name: 'addemoji', category: 'settings', description: 'Add custom emojis to the server', subcommands: ['url', 'file', 'animated'] },
            { name: 'removeemoji', category: 'settings', description: 'Remove emojis from the server', subcommands: ['name', 'id', 'all'] },
            { name: 'rename', category: 'settings', description: 'Rename channels or roles', subcommands: ['channel', 'role', 'user'] },
            { name: 'afk', category: 'settings', description: 'Set AFK status and message', subcommands: ['set', 'remove', 'list'] },
            { name: 'afkmentions', category: 'settings', description: 'Manage AFK mention responses', subcommands: ['enable', 'disable', 'message'] },
            { name: 'alias', category: 'settings', description: 'Create command aliases', subcommands: ['add', 'remove', 'list'] },
            { name: 'blacklist', category: 'settings', description: 'Manage blacklisted users or words', subcommands: ['add', 'remove', 'list'] },
            { name: 'bots', category: 'settings', description: 'Manage bot permissions and settings', subcommands: ['permissions', 'roles', 'channels'] },
            { name: 'filterlinks', category: 'settings', description: 'Filter links in messages', subcommands: ['enable', 'disable', 'whitelist'] },
            { name: 'lock', category: 'settings', description: 'Lock channels or categories', subcommands: ['channel', 'category', 'all'] },
            { name: 'lockdownrole', category: 'settings', description: 'Set lockdown roles', subcommands: ['add', 'remove', 'list'] },
            { name: 'messageFilter', category: 'settings', description: 'Filter messages based on content', subcommands: ['add', 'remove', 'list'] }
        ];

        // Filter out developer/bot owner only commands
        const excludedCommands = ['developeradd', 'dump', 'setup'];
        const filteredCommands = commandsData.filter(cmd => !excludedCommands.includes(cmd.name));

        // Initialize commands display
        function initializeCommands() {
            const commandsGrid = document.getElementById('commandsGrid');
            const commandCount = document.getElementById('commandCount');
            const searchInput = document.getElementById('commandSearch');
            const categoryFilter = document.getElementById('categoryFilter');
            const searchClear = document.getElementById('searchClear');
            const clearFilters = document.getElementById('clearFilters');

            let currentCommands = [...filteredCommands];
            let currentSearch = '';
            let currentCategory = 'all';

            function updateClearButton() {
                const hasFilters = currentSearch.length > 0 || currentCategory !== 'all';
                clearFilters.disabled = !hasFilters;
                searchClear.classList.toggle('visible', currentSearch.length > 0);
            }

            function renderCommands() {
                commandsGrid.innerHTML = '';
                commandCount.textContent = `Showing ${currentCommands.length} of ${filteredCommands.length} commands`;

                if (currentCommands.length === 0) {
                    const noResults = document.createElement('div');
                    noResults.className = 'no-results';
                    noResults.style.cssText = `
                        grid-column: 1 / -1;
                        text-align: center;
                        padding: 60px 20px;
                        color: rgba(255, 255, 255, 0.6);
                        font-size: 1.1rem;
                    `;
                    noResults.innerHTML = `
                        <i class="fas fa-search" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.3;"></i>
                        <div>No commands found matching your criteria</div>
                        <div style="font-size: 0.9rem; margin-top: 10px; opacity: 0.7;">
                            Try adjusting your search or category filter
                        </div>
                    `;
                    commandsGrid.appendChild(noResults);
                    return;
                }

                currentCommands.forEach(command => {
                    const commandCard = document.createElement('div');
                    commandCard.className = 'command-card';
                    
                    const subcommandsHtml = command.subcommands ? 
                        `<div class="subcommands-section">
                            <div class="subcommands-label">Subcommands:</div>
                            <div class="subcommand-tags">
                                ${command.subcommands.map(sub => `<span class="subcommand-tag">${sub}</span>`).join('')}
                            </div>
                        </div>` : '';

                    commandCard.innerHTML = `
                        <div class="command-category">${command.category.toUpperCase()}</div>
                        <div class="command-name">
                            ${command.name}
                        </div>
                        <div class="command-description">${command.description}</div>
                        ${subcommandsHtml}
                    `;

                    commandsGrid.appendChild(commandCard);
                });
            }

            function filterCommands() {
                currentSearch = searchInput.value.toLowerCase();
                currentCategory = categoryFilter.value;

                currentCommands = filteredCommands.filter(command => {
                    const matchesSearch = command.name.toLowerCase().includes(currentSearch) || 
                                        command.description.toLowerCase().includes(currentSearch) ||
                                        command.subcommands?.some(sub => sub.toLowerCase().includes(currentSearch));
                    const matchesCategory = currentCategory === 'all' || command.category === currentCategory;
                    return matchesSearch && matchesCategory;
                });

                updateClearButton();
                renderCommands();
            }

            function clearAllFilters() {
                searchInput.value = '';
                categoryFilter.value = 'all';
                currentSearch = '';
                currentCategory = 'all';
                filterCommands();
            }

            function clearSearch() {
                searchInput.value = '';
                currentSearch = '';
                filterCommands();
            }

            // Event listeners
            searchInput.addEventListener('input', filterCommands);
            categoryFilter.addEventListener('change', filterCommands);
            searchClear.addEventListener('click', clearSearch);
            clearFilters.addEventListener('click', clearAllFilters);

            // Keyboard shortcuts
            searchInput.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    clearSearch();
                }
            });

            // Initial render
            updateClearButton();
            renderCommands();
        }

        // Ultra Modern Minimalistic Loading Screen
        function hideLoadingScreen() {
            const loadingScreen = document.getElementById('loadingScreen');
            loadingScreen.classList.add('fade-out');
            
            // Remove the loading screen from DOM after fade animation
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 600);
        }
        
        // Statistics counter animation
        function animateCounters() {
            const counters = document.querySelectorAll('.stat-number');
            
            counters.forEach(counter => {
                const target = parseFloat(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const increment = target / (duration / 16); // 60fps
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    
                    if (target % 1 === 0) {
                        counter.textContent = Math.floor(current).toLocaleString();
                    } else {
                        counter.textContent = current.toFixed(1);
                    }
                }, 16);
            });
        }
        
        // FAQ functionality
        function initializeFAQ() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                
                question.addEventListener('click', () => {
                    const isActive = item.classList.contains('active');
                    
                    // Close all other FAQ items
                    faqItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current item
                    if (isActive) {
                        item.classList.remove('active');
                    } else {
                        item.classList.add('active');
                    }
                });
            });
        }
        
        // Smooth scrolling for navigation links
        function initializeSmoothScrolling() {
            const navLinks = document.querySelectorAll('a[href^="#"]');
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = link.getAttribute('href');
                    const targetElement = document.querySelector(targetId);
                    
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        }
        
        // Intersection Observer for animations
        function initializeScrollAnimations() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, observerOptions);
            
            // Observe all sections for fade-in animation
            const sections = document.querySelectorAll('section');
            sections.forEach(section => {
                section.style.opacity = '0';
                section.style.transform = 'translateY(30px)';
                section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(section);
            });
        }
        
        // Initialize animations and commands when page loads
        window.addEventListener('load', () => {
            createStars();
            initializeCommands();
            initializeFAQ();
            initializeSmoothScrolling();
            initializeScrollAnimations();
            
            // Animate counters when stats section comes into view
            const statsSection = document.querySelector('.stats-section');
            const statsObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateCounters();
                        statsObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            if (statsSection) {
                statsObserver.observe(statsSection);
            }
            
            // Hide loading screen after ultra-fast delay (modern minimalistic style)
            setTimeout(hideLoadingScreen, 2000);
        });
    </script>
</body>
</html>
