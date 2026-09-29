export type Tool = {
  slug: string; name: string; short: string; description: string; category: string; icon: string;
};
export const tools: Tool[] = [
 {slug:'image-compressor',name:'Image Compressor',short:'Compress JPG, PNG and WebP images',description:'Reduce image file size in your browser while keeping control over quality.',category:'Image Tools',icon:'◈'},
 {slug:'image-resizer',name:'Image Resizer',short:'Resize images to exact dimensions',description:'Resize images to custom width and height without uploading them to a server.',category:'Image Tools',icon:'↗'},
 {slug:'jpg-to-png',name:'JPG to PNG',short:'Convert JPG images to PNG',description:'Convert JPG and JPEG images to PNG directly in your browser.',category:'Image Tools',icon:'⇄'},
 {slug:'png-to-jpg',name:'PNG to JPG',short:'Convert PNG images to JPG',description:'Convert PNG images to optimized JPG files in seconds.',category:'Image Tools',icon:'⇄'},
 {slug:'pdf-compressor',name:'PDF Compressor',short:'Optimize PDF file size',description:'Reduce PDF size with browser-based PDF optimization.',category:'PDF Tools',icon:'▤'},
 {slug:'qr-code-generator',name:'QR Code Generator',short:'Create QR codes instantly',description:'Generate downloadable QR codes for URLs, text, email and more.',category:'Utility Tools',icon:'▦'},
 {slug:'word-counter',name:'Word Counter',short:'Count words, characters and reading time',description:'Analyze text instantly with words, characters, sentences and reading time.',category:'Text Tools',icon:'Aa'},
 {slug:'json-formatter',name:'JSON Formatter',short:'Format and validate JSON',description:'Format, validate and inspect JSON directly in your browser.',category:'Developer Tools',icon:'{}'},
];
export const categories = [...new Set(tools.map(t=>t.category))];
export function getTool(slug:string){return tools.find(t=>t.slug===slug)}
