import { visitResponsiveStickyPro } from "../../common/visit";
import { Utilities } from "../../common/utils";
import { enableResponsiveStickyPro as config } from "../../../../src/test/testEnvConfig";

const utils = new Utilities(config);

context("Responsive sticky", () => {
  beforeEach(() => {
    cy.viewport(500, 600);
    visitResponsiveStickyPro();
  });

  it("Right and Bottom sticky shouldn`t display on narrow view", () => {
    // ✅
    utils.getRightStickyPane().should("not.exist");
    utils.getBottomStickyPane().should("not.exist");
  });

  it("Only bottom sticky should display on narrow view", () => {
    // ✅
    cy.viewport(500, 900);
    utils.getBottomStickyPane().should("exist");
    utils.getRightStickyPane().should("not.exist");
  });

  it("Only right sticky should display on narrow view", () => {
    // ✅
    cy.viewport(900, 500);
    utils.getBottomStickyPane().should("not.exist");
    utils.getRightStickyPane().should("exist");
  });
});
