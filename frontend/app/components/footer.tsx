export default function Footer() {
    return (
        <footer className="py-6 bg-black text-white text-center">
            <p>© {new Date().getFullYear()} Ishika Deshpande</p>

            <div className="flex justify-center gap-6 mt-4">
                <a href="https://github.com/" target="_blank">
                    GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank">
                    LinkedIn
                </a>
            </div>
        </footer>
    );
}