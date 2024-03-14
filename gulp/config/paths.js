const src = './src';
const dist = './dist';
const build = './build';
const components = `${src}/pug`;

export default {
    src,
    dist,
    build,
    components,
    scss: {
        src: `${src}/assets/scss/**/*.scss`,
        components: `${components}/**/*.scss`,
        output: `${dist}/css`,
        build: `${build}/css`,
    },
    font: {
        ttf: `${src}/assets/fonts/**/*.ttf`,
        woff2: `${src}/assets/fonts/**/*.woff2`,
        output: `${dist}/fonts`,
        build: `${build}/fonts`,
    },
    js: {
        src: `${src}/assets/js`,
        components: `${components}/**/*.js`,
        output: `${dist}/js`,
        build: `${build}/js`,
    },
    svg: {
        src: `${src}/assets/img/**/*.svg`,
        components: `${components}/**/img/**/*.svg`,
        output: `${dist}/img`,
        build: `${build}/img`,
    },
};
