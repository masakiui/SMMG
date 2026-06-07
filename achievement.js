function unlockAchievement(name) {
localStorage.setItem(name, "true");

```
const achievements = [
    "observer",
    "explorer",
    "listener",
    "friend",
    "understander"
];

const allUnlocked = achievements.every(
    a => localStorage.getItem(a) === "true"
);

if (allUnlocked) {
    localStorage.setItem("partner", "true");
}
```

}
