# The Internet in One Word

[![make.fun](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Rank](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/muherilobak-web/internet-in-one-word/rank.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)
[![Reward](https://make.fun/badge/u-ronigrv-the-internet-in-one-word-e388f33b/muherilobak-web/internet-in-one-word/reward.svg)](https://make.fun/bounty/u-ronigrv-the-internet-in-one-word-e388f33b)

## The entry

**clingy**

The whole internet, in one word: a needy character that will not let go of you.
The platforms cling to your attention with endless feeds, notifications, streaks
and autoplay; you cling to the phone in return; and the content itself clings,
since nothing is ever really deleted and old posts resurface years later. The
laugh comes first, then the nod — six letters, one beat, true of every layer of
the internet at once.

## How it works

`main.ts` is a small deterministic TypeScript program with no dependencies and no
network access. It writes the single word `clingy` — and nothing else, not even
a trailing newline — to `/output/entry.txt`, creating the `/output` folder first
if it does not exist. Before writing, it checks the word is non-blank and between
1 and 30 characters long, and fails loudly instead of writing anything if it is
not. Every run produces byte-identical output.

## Run

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
