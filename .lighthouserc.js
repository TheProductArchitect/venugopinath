module.exports = {
    ci: {
        collect: {
            port: 4173,
            startServerCommand: 'npm run preview',
            startServerReadyPattern: 'ready in',
            url: ['http://localhost:4173/'],
            numberOfRuns: 2,
        },
        assert: {
            assertions: {
                'categories:performance': ['warn', { minScore: 0.9 }],
                'categories:accessibility': ['warn', { minScore: 0.9 }],
                'categories:best-practices': ['warn', { minScore: 0.9 }],
                'categories:seo': ['warn', { minScore: 0.9 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
