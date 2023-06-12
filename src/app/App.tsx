import './styles/index.scss';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/theme';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { Suspense } from 'react';

const App = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <AppRouter />
                <ThemeSwitcher />
            </Suspense>
        </div>
    );
};

export default App;
