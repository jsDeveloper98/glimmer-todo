import { setupRenderingTest, render } from '@glimmer/test-helpers';
import hbs from '@glimmer/inline-precompile';

const { module, test } = QUnit;

module('Component: Filter-buttons', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    /*
     * You may pass data into the component through arguments set on the
     * `testContext`
     *
     * For example:
     *
     * ```
     * this.foo = { foo: '123' };
     *
     * await render(hbs`<Filter-buttons @foo={{this.foo}} />`)
     *
     * // or
     *
     * this.foo = 'bar';
     * await render(hbs`<p>{{this.foo}}</p>`);
     *
     * assert.dom('p').text('bar');
     * ```
     */
    await render(hbs`<Filter-buttons />`);
    assert.ok(this.containerElement.querySelector('div'));
  });
});
