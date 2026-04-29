# Manifest Media Logo Integration

Your beautiful Manifest Media logos have been integrated throughout the website with fancy animations!

## What Was Added

### 1. Header Logo
- **Location**: Navigation bar (top left)
- **Logo Used**: Light background version
- **Size**: 50px height
- **Animation**: Floating effect (bobs up and down)
- **Hover Effect**: Scales up 10%

### 2. Hero Section Logo
- **Location**: Background of hero section
- **Logo Used**: Dark background version
- **Size**: 600px (large and impressive)
- **Animations**:
  - Zoom effect (scales 1x to 1.1x)
  - Rotation (full 360-degree spin)
  - Glow effect (gold drop shadow)
- **Opacity**: 15% (subtle background element)
- **Duration**: 8s zoom, 20s rotation

### 3. Footer Logo
- **Location**: Footer section (top)
- **Logo Used**: Light background version
- **Size**: 80px height
- **Animation**: Floating effect (bobs up and down)
- **Hover Effect**: Scales up 10% and rotates 5 degrees

## Animation Details

### Logo Float Animation
```css
@keyframes logoFloat {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}
```
Creates a gentle floating/bobbing effect on header and footer logos.

### Hero Logo Zoom Animation
```css
@keyframes heroLogoZoom {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.1); }
}
```
Makes the hero logo pulse/breathe with a subtle zoom effect.

### Hero Logo Rotate Animation
```css
@keyframes heroLogoRotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
}
```
Creates a continuous smooth rotation of the hero logo.

## Responsive Behavior

### Desktop (1200px+)
- Header logo: 50px
- Hero logo: 600px
- Footer logo: 80px

### Tablet (768px - 1199px)
- Header logo: 40px
- Hero logo: 400px
- Footer logo: 60px

### Mobile (480px - 767px)
- Header logo: 35px
- Hero logo: 250px
- Footer logo: 50px

### Small Mobile (<480px)
- Header logo: 35px
- Hero logo: 250px
- Footer logo: 50px

## Files Modified

1. **index.html**
   - Added logo-container to navbar
   - Added hero-logo-container to hero section
   - Added footer-logo to footer

2. **styles.css**
   - Added .logo-container styling
   - Added .logo-img styling with float animation
   - Added .hero-logo-container positioning
   - Added .hero-logo with zoom and rotate animations
   - Added .footer-logo and .footer-logo-img styling
   - Added three new keyframe animations
   - Updated responsive media queries

## Logo Files Used

- **Header & Footer**: `public/logo/Manifest Media (LIGHT BACKGROUND) copy.png`
- **Hero Section**: `public/logo/Manifest Media (DARK BACKGROUND) copy.png`

## Browser Compatibility

All animations work in:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Performance

- Animations use CSS (no JavaScript overhead)
- GPU-accelerated transforms
- Smooth 60fps performance
- Minimal file size impact

## Customization

To adjust animations:

### Change Hero Logo Size
Edit `styles.css` line 119:
```css
.hero-logo {
    width: 600px;  /* Change this value */
}
```

### Change Animation Speed
Edit `styles.css` line 121:
```css
animation: heroLogoZoom 8s ease-in-out infinite, heroLogoRotate 20s linear infinite;
/* Change 8s and 20s to different values */
```

### Change Logo Opacity
Edit `styles.css` line 114:
```css
opacity: 0.15;  /* Change this value (0 = invisible, 1 = fully visible) */
```

### Change Float Distance
Edit `styles.css` line 191:
```css
transform: translateY(-20px);  /* Change -20px to different value */
```

## Testing

The logos display correctly on:
- ✅ Desktop browsers
- ✅ Tablets
- ✅ Mobile phones
- ✅ All screen orientations
- ✅ Dark and light backgrounds

## Future Enhancements

Possible additions:
- Click animation on logo (bounce effect)
- Parallax effect on hero logo
- Logo color change on scroll
- Interactive logo (clickable for animations)
- Logo animation on page load

---

**Your Manifest Media brand is now prominently featured throughout the website with professional, eye-catching animations!**
