def palindrome?(arr)
  return [] if arr.empty?
  midodd = (arr.length/2)

  if arr.length%2 > 0
  mideven = midodd
  else
  mideven = midodd - 1
end

  first = arr[0..midodd]
  second = arr[mideven..-1].reverse

  if first == second
    return true
  else
    return midodd ,mideven, first, second, "sorry #{arr} is not a palindrome"
  end
end

def dup?(arr)
  duplicate = false
  hash = arr.each_with_object(Hash.new(0)) { |key , value| value[key] +=1}
    hash.each do |key, value|
      if value > 1
      duplicate = true
      end
    end
        return duplicate
       end

Class Array


def duplicate?(arr)

  if arr.uniq != arr
    return true
  else
    return false
  end
end

<style>
#mobile-header {
    display: none;
}
@media only screen and (max-width: 767px){
    #mobile-header {
        display: block;
    }
}
</style>

<div id="mobile-header">
    <a id="responsive-menu-button" href="#sidr-main">Menu</a>
</div>

<div id="navigation">
    <nav class="nav">
        <ul>
            <li><a href="#download">Download</a></li>
            <li><a href="#getstarted">Get started</a></li>
            <li><a href="#usage">Demos &amp; Usage</a></li>
            <li><a href="#documentation">Documentation</a></li>
            <li><a href="#themes">Themes</a></li>
            <li><a href="#support">Support</a></li>
        </ul>
    </nav>
</div>

<script>
    $('#responsive-menu-button').sidr({
      name: 'sidr-main',
      source: '#navigation'
    });
</script>
