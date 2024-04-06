"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
export default function DarkModeSwitch() {
  // inga than dork mode fucntioanality irukum
  // first namaku ena mode irukunu teriyanum -  because users ena mode use pandranga nu teriaythu silar light mode palar dark mode use panuvonga
  // so athu first find panni athukthe icon ah display pannanum
  // before ThemeProvider user system ah config panni theme ah provide pannidum
  // basic ah themeprovider - dark mode -black and light mode - white ah provide pannum
  // itha nama manual ah tailwind css la mathikalam

  // Find Current theme

  const { theme, setTheme, systemTheme } = useTheme();
  // theme - inga systemTheme la irunthu varum - initail ah system nu irukm - apdi iruntha systemTheme ena nu teriyanum - so atha vaangi nama ena icon show pannanumo athu functionality oda panna vekkanu
  const currentTheme = theme === "system" ? systemTheme : theme;
  // after initial theme aprm nama manual ah theme ah mathuvom athuku setTheme ah use pannuvom athu theme state mathum - so ithu after initial state aprm changes panna ithu nandakum
  // and ThemeProvider useContext() use pannuthu - athula local storage la theme ah set panuthanu pakkanum
  // oithu local storage la engayum stoare agala once we refresh the page athu system theme maridum
  const [mounting, setMounting] = useState(false);
  useEffect(() => setMounting(true),[]); // useeffect - dom load anathuku aprm and state change agum bothu recycle nadakum
  return (
    <div>
      {/* DOM load anathuku aprm ithu config start agum */}
      {mounting &&
        (currentTheme === "dark" ? (
          <MdLightMode
            onClick={() => setTheme("light")}
            className="hover:text-amber-500 text-xl cursor-pointer"
          />
        ) : (
          <MdDarkMode
            onClick={() => setTheme("dark")}
            className="hover:text-amber-500 text-xl cursor-pointer"
          />
        ))}
    </div>
  );
}
/**
 * unreload na - rendering ellathayum reverse la eduthuthu white screen ah kamikuma nu na terijikanum
 * so devtools la athu irukum
 */
/**
 * intha theme ah config panna time agalam athuku nama page content laod anathuku aprm config panna start pannalam
 * so itha mounting - modern way of telling loading html elements- DOMContentLoaded
 *
 */
