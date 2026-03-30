// Read all files in the gallery folder at build time
const allFiles = import.meta.glob('/public/images/gallery/*.*');
const fileDict = {};
Object.keys(allFiles).forEach(path => {
    const filename = path.split('/').pop() || "";
    // Check if the filename ends with a size suffix like -400, -768, -1200
    const match = filename.match(/^(.*)-(400|768|1200)\.(webp|png|jpg|jpeg|gif)$/i);
    if (match) {
        const base = match[1];
        const size = match[2];
        if (!fileDict[base]) {
            fileDict[base] = { original: `/images/gallery/${filename}` };
        }
        if (size === '400')
            fileDict[base].mobile = `/images/gallery/${filename}`;
        if (size === '768')
            fileDict[base].tablet = `/images/gallery/${filename}`;
        if (size === '1200')
            fileDict[base].desktop = `/images/gallery/${filename}`;
    }
    else {
        // It's a regular file without a size suffix
        const base = filename.replace(/\.(webp|png|jpg|jpeg|gif)$/i, '');
        if (!fileDict[base]) {
            fileDict[base] = { original: `/images/gallery/${filename}` };
        }
        else {
            fileDict[base].original = `/images/gallery/${filename}`;
        }
    }
});
export const galleryImages = Object.values(fileDict).map(item => {
    // If we have specific sizes, use them, otherwise fallback to the original for everything
    const desktopSrc = item.desktop || item.original;
    const tabletSrc = item.tablet || item.original;
    const mobileSrc = item.mobile || item.original;
    // Extract base name for alt text
    const filename = item.original.split('/').pop() || "";
    const base = filename.replace(/-(400|768|1200)\.(webp|png|jpg|jpeg|gif)$/i, '')
        .replace(/\.(webp|png|jpg|jpeg|gif)$/i, '');
    const formattedAlt = base.charAt(0).toUpperCase() + base.slice(1).replace(/([A-Z])/g, ' $1').trim();
    return {
        src: tabletSrc, // Default middle size
        alt: `Villa ${formattedAlt}`,
        mobileSrc,
        tabletSrc,
        desktopSrc,
    };
});
