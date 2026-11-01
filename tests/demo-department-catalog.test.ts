import { describe, expect, it } from "vitest";
import roster from "../data/demo/identities.json";
import { fieldOptions } from "@/domain/catalog";
import { optionName } from "@/domain/presentation";
import { guestDepartments } from "@/domain/guest-session";

describe("demo employee departments", () => {
  it("uses every department offered by the sender dropdown, including Marketing and Sales", () => {
    const assigned = [...new Set(roster.accounts.map(row => row.department))].sort();
    expect(assigned).toEqual([...fieldOptions.department].sort());
    expect([...guestDepartments].sort()).toEqual(assigned);
    for (const department of assigned) {
      expect(optionName(department)).not.toBe(department);
    }
  });
});
