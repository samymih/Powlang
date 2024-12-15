/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
      outputFileTracingIncludes: {
        '/api/compiler': [
          './compiler/compiler.js',
          './compiler/lexer.js',
          './compiler/parser.js',
          './compiler/generator.js',
        ],
    },
  };
  
  export default nextConfig;
  