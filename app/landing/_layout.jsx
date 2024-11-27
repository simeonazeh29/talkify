import React from "react";
import { Slot } from "expo-router";

export default function LandingLayout() {
  return <Slot />; // Ensures nested screens like onboarding render
}
