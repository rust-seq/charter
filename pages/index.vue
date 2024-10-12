<template>
  <div class="mx-auto mt-20">
    <main>
      <h1>👋 Hi there!</h1>
      <p>
        Welcome to <code>rust-seq</code>—a project that endeavors to rewrite the
        foundations of the omics ecosystem in Rust. We're achieving that mission
        through the following ways.
      </p>

      <div class="get-involved">
        <FrontPageCard
          step="1"
          title="Organizing the community around what needs built."
          description="Though our RFC process, we outline crates that need to be created
          along with who will create them."
        >
        </FrontPageCard>
        <FrontPageCard
          step="2"
          title="Bringing the community together on Zulip."
          description="Foo bar baz quux qil."
        ></FrontPageCard>
      </div>
    </main>
  </div>
</template>

<script lang="ts"></script>

<style scoped lang="postcss">
main {
  @apply cursor-pointer;
  @apply prose dark:prose-invert;
  @apply max-w-3xl;
  @apply m-auto;

  .get-involved {
    @apply flex flex-col space-y-8 justify-center;
    @apply py-6 my-2;
    @apply border-t border-slate-100;
  }
}
</style>
