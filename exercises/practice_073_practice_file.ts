type UserId = string;

type User = {
  id: UserId;
  name: string;
  isActive: boolean;
};

function normalizeName(raw: string): string {
  return raw.trim().replace(/\s+/g, " ");
}

function makeUser(id: UserId, rawName: string): User {
  return {
    id,
    name: normalizeName(rawName),
    isActive: true,
  };
}

function deactivate(user: User): User {
  return { ...user, isActive: false };
}

function canAccessAdminPanel(user: User): boolean {
  return user.isActive && user.name.length > 2;
}

function printReport(user: User): string {
  const status = user.isActive ? "ACTIVE" : "INACTIVE";
  return `${user.id} | ${user.name} | ${status}`;
}

// --- Usage section (start here) ---
const u1 = makeUser("u-001", "   Ada    Lovelace ");
const u2 = deactivate(u1);

if (canAccessAdminPanel(u2)) {
  console.log("Admin access granted");
} else {
  console.log("Admin access denied");
}

console.log(printReport(u2));
