export type Game = {
  id: string
  title: string
  country: string
  description: string
  players: string
  age: string
  materials: string[]
  howToPlay: string[]
}

export const games: Game[] = [
  {
    id: "kabaddi",
    title: "Kabaddi",
    country: "India",
    description: "A traditional Indian team sport that combines tag and wrestling.",
    players: "2 teams",
    age: "8+",
    materials: ["Open space"],
    howToPlay: [
      "Divide players into two teams.",
      "One player from the attacking team enters the opponent's side.",
      "The player must tag opponents and return to their side without being caught.",
      "While attacking they must continuously say 'kabaddi'."
    ]
  },
  {
    id: "petanque",
    title: "Pétanque",
    country: "France",
    description: "A popular French outdoor game similar to bocce.",
    players: "2–6",
    age: "6+",
    materials: ["Metal balls", "Small target ball"],
    howToPlay: [
      "Throw the small target ball (cochonnet).",
      "Players take turns throwing their metal balls.",
      "Try to land as close as possible to the target ball.",
      "The closest ball wins the round."
    ]
  },
  {
    id: "luta-de-galo",
    title: "Luta de Galo",
    country: "Brazil",
    description: "A fun balance and strength game played on one leg.",
    players: "2",
    age: "6+",
    materials: [],
    howToPlay: [
      "Each player stands on one leg.",
      "Players hold the other leg with one hand.",
      "Try to push the opponent off balance.",
      "Whoever touches the ground with the other foot loses."
    ]
  }
]
